"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import DownloadPDFButton from "./DownloadPDFButton";
import { courseLabels } from "@/lib/airtableTables";
import PrintableResult from "./PrintableResult";

interface Subject {
  code: string;
  name: string;
  credits: number;
  field: string;
}

interface Student {
  OriginalName?: string;
  Batch?: string | number;
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
    pageStyle: `
      @page { size: A5 portrait; margin: 0; }
      @media print {
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .printable-content { margin: 0 !important; padding: 0 !important; }
      }
    `,
  });

  const batch = student?.Batch ? String(student.Batch) : "-";

  return (
    <div className="w-[1400px]  mx-auto bg-white shadow-lg rounded-3xl">
      {/* Buttons - Visible on screen, hidden on print */}
      <div className="flex justify-end gap-4 p-4 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium transition-colors"
        >
          Print
        </button>
        <DownloadPDFButton
          student={student}
          subjects={subjects}
          totalMarks={totalMarks}
          course={course}
          rollNo={rollNo}
          batch={batch}
        />
      </div>

      {/* Screen View: Detailed Result Sheet (Visible on Web) */}
      <div className="p-6 flex flex-col print:hidden">
        {" "}
        {/* Hide on print to avoid duplication */}
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/SIBBC_Logo_New_40_yellow.png"
            alt="Logo"
            height={35}
            width={450}
            priority
          />
        </div>
        {/* Header Info */}
        <div className="text-center mb-4">
          <span className="text-sm sm:text-md font-normal sm:font-semibold leading-tight">
            <p>
              Baptist Nagar, No.4 Veerapandi, Coimbatore, Tamil Nadu - 641019
            </p>
            <p className="italic">
              An Accredited Member Of The Asia Theological Association
            </p>
          </span>
          <p className="font-semibold text-xl pt-4 uppercase">
            Semester Exam Result
          </p>
          {/* <p className="font-semibold text-lg pt-2 uppercase">
            {courseLabels[course]} Batch - {batch}
          </p> */}
        </div>
        {/* Student Info */}
        <div className="flex justify-around text-sm sm:text-lg font-bold mb-4">
          <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-20">
            <div>Name: {student?.OriginalName ?? "-"}</div>
            <div>Roll No: {rollNo}</div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-20">
            <div>Course: {courseLabels[course]}</div>
            <div>Batch: {batch}</div>
          </div>
        </div>
        {/* Subjects Table (Screen Version) */}
        <table className="border-collapse border-gray-700 border-2 w-full my-3">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Subject Code
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Subject Name
              </th>
              <th className="border border-gray-700 px-4 py-2 text-center">
                Credits
              </th>
              <th className="border border-gray-700 px-4 py-2 text-center">
                Marks
              </th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s) => {
              const rawMark = student?.[s.field];
              const markValue =
                rawMark !== undefined && rawMark !== "" ? Number(rawMark) : NaN;

              // Determine pass mark based on course
              const isDiplomaCourse =
                course.toLowerCase() === "diploma1" ||
                course.toLowerCase() === "diploma2";
              const passMark = isDiplomaCourse ? 50 : 60;

              // Decide text color
              let textColor = "";
              if (isNaN(markValue)) {
                textColor = "text-gray-500"; // NA
              } else if (markValue >= passMark) {
                textColor = "text-green-600"; // Pass
              } else {
                textColor = "text-red-600"; // Fail
              }

              return (
                <tr key={s.code} className="even:bg-gray-50">
                  <td className="border border-gray-700 px-4 py-2 w-[20%]">
                    {s.code}
                  </td>
                  <td className="border border-gray-700 px-4 py-2 w-[40%]">
                    {s.name}
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-center w-[20%]">
                    {s.credits}
                  </td>
                  <td
                    className={`border border-gray-700 px-4 py-2 text-center w-[20%] font-semibold ${textColor}`}
                  >
                    {!isNaN(markValue) ? markValue : "NA"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Footer Info (Screen) */}
        <div className="flex justify-end text-lg font-bold mr-2 sm:mr-20">
          <div>Average: {totalMarks.toFixed(2)}</div>
        </div>
      </div>

      {/* Print View: Hidden PrintableResult (Captured on Print, A5 Size) */}
      <div
        ref={printRef}
        className="hidden print:block print:w-[148mm] print:min-h-[210mm] print:mx-auto"
      >
        <PrintableResult
          student={student}
          subjects={subjects}
          totalMarks={totalMarks}
          course={course}
          rollNo={rollNo}
          batch={batch}
        />
      </div>
    </div>
  );
}
