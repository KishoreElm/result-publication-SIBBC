"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import DownloadPDFButton from "./DownloadPDFButton";
import { courseLabels } from "@/lib/airtableTables";

interface Subject {
  code: string;
  name: string;
  credits: number;
  field: string;
}

interface Student {
  OriginalName?: string;
  Batch?: string | number; // ✅ no any
  [key: string]: string | number | undefined;
}

export default function ResultClient({
  student,
  subjects,
  totalMarks,
  course,
  rollNo,
}: {
  student: Student;
  subjects: Subject[];
  totalMarks: number;
  course: string;
  rollNo: string;
}) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });

  const batch = student?.Batch;

  return (
    <div className=" w-[1400px]  mx-auto bg-white  shadow-lg rounded-3xl ">
      <div ref={printRef} className="  p-6 printable flex flex-col">
        <div className="flex justify-end gap-4 mb-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Print
          </button>
          <DownloadPDFButton
            student={student}
            subjects={subjects}
            totalMarks={totalMarks}
            rollNo={rollNo}
            course={course}
            batch={batch ? String(batch) : ""}
          />
        </div>
        {/* Logo */}
        <div className="flex justify-center mb-4 ">
          <Image
            src="/images/SIBBC_Logo_New_40_yellow.png"
            alt="Logo"
            height={35}
            width={450}
            // fill
            // className="object-contain"
            priority
          />
        </div>

        {/* Header Info */}
        <div className="text-center mb-4">
          <span className="text-sm sm:text-md font-normal sm:font-semibold">
            <p>
              {" "}
              Baptist Nagar, No.4 Veerapandi, Coimbatore, Tamil Nadu - 641019{" "}
            </p>
            <p> An Accredited Member Of The Asia Theological Association </p>
          </span>

          <p className="font-semibold text-xl pt-4 uppercase">
            Semester Exam Result
          </p>
        </div>

        {/* Student Info */}
        <div className="flex justify-around text-sm  sm:text-lg font-bold ">
          <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-20">
            <div>Name: {student?.OriginalName ?? "-"}</div>
            <div>Roll No: {rollNo}</div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-20">
            <div>Course: {courseLabels[course]}</div>
            <div>Batch: {batch}</div>
          </div>
        </div>

        {/* Subjects Table */}

        <table className="border-collapse border-black border-2 w-full my-3">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="border px-4 py-2">Subject Code</th>
              <th className="border px-4 py-2">Subject Name</th>
              <th className="border px-4 py-2">Credits</th>
              <th className="border px-4 py-2">Marks</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((s) => {
              const markValue = Number(student?.[s.field]) || 0;

              // Determine pass mark based on course
              const isDiplomaCourse =
                course.toLowerCase() === "diploma1" ||
                course.toLowerCase() === "diploma2";
              const passMark = isDiplomaCourse ? 50 : 60;

              // Decide text color
              let textColor = "";
              if (markValue === 0) {
                textColor = "text-gray-500"; // Not Applicable
              } else if (markValue >= passMark) {
                textColor = "text-green-600"; // Pass
              } else {
                textColor = "text-red-600"; // Fail
              }

              return (
                <tr key={s.code}>
                  <td className="border px-4 py-2 w-[20%]">{s.code}</td>
                  <td className="border px-4 py-2 w-[40%]">{s.name}</td>
                  <td className="border px-4 py-2 text-center w-[20%]">
                    {s.credits}
                  </td>
                  <td
                    className={`border px-4 py-2 text-center w-[20%] font-semibold ${textColor}`}
                  >
                    {markValue && Number(markValue) > 0
                      ? markValue
                      : "Not Applicable"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Footer Info */}
        <div className="flex justify-end  sm:text-lg font-bold mr-2 sm:mr-20">
          <div>Average: {totalMarks.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
}
