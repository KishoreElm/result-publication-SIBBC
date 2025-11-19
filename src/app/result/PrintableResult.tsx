"use client";
import Image from "next/image";
import { courseLabels } from "@/lib/airtableTables";

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

export default function PrintableResult({
  student,
  subjects,
  totalMarks,
  course,
  rollNo,
  batch,
}: {
  student: Student;
  subjects: Subject[];
  totalMarks: number;
  course: string;
  rollNo: string;
  batch: string;
}) {
  const handlePrint = () => {
    window.print();
  };

  const isDiplomaCourse =
    course.toLowerCase() === "diploma1" || course.toLowerCase() === "diploma2";
  const passMark = isDiplomaCourse ? 50 : 60;

  return (
    <div className="flex flex-col items-center">
      {/* ✅ Printable Area */}
      <div
        className="
          mx-auto bg-white shadow-md border border-gray-300
          p-4 sm:p-6 rounded-md
          w-[148mm] min-h-[210mm]
          flex flex-col justify-between
          text-gray-900
          print:w-[148mm] print:h-[210mm] print:shadow-none print:border-0
        "
      >
        {/* 🔶 Header */}
        <div className="space-y-2">
          <div className="flex justify-center mb-3">
            <Image
              src="/images/SIBBC_Logo_New_40_yellow.png"
              alt="Logo"
              width={300}
              height={30}
              priority
            />
          </div>

          <div className="text-center text-[10pt] leading-tight p-2 ">
            <p className="font-medium">
              Baptist Nagar, No.4 Veerapandi, Coimbatore, Tamil Nadu - 641019
            </p>
            <p className="italic ">
              An Accredited Member Of The Asia Theological Association
            </p>
            <p className="font-semibold text-[11pt] uppercase mt-1">
              {`${courseLabels[course]} Batch - ${batch}`}
            </p>
          </div>

          {/* <hr className="border-t border-gray-400 my-2" /> */}

          {/* Student Info */}
          <div className="flex justify-between text-[10.5pt] font-medium ">
            <div>Name: {student?.OriginalName ?? "-"}</div>
            <div>Roll No: {rollNo}</div>
          </div>

          {/* 🧠 Subjects Table */}
          <table className="border border-gray-700 border-collapse w-full text-[10pt] mb-2">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border border-gray-700 px-2 py-1 w-[25%]">
                  Subject Code
                </th>
                <th className="border border-gray-700 px-2 py-1 w-[40%] ">
                  Subject Name
                </th>
                <th className="border border-gray-700 px-2 py-1 w-[15%]">
                  Credits
                </th>
                <th className="border border-gray-700 px-2 py-1 w-[15%]">
                  Marks
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((s) => {
                const rawMark = student?.[s.field];
                const markValue =
                  rawMark !== undefined && rawMark !== ""
                    ? Number(rawMark)
                    : NaN;

                // Color logic
                const textColor = isNaN(markValue)
                  ? "text-gray-500"
                  : markValue >= passMark
                  ? "text-green-600"
                  : "text-red-600";

                // Display value logic
                const displayMark =
                  rawMark === ""
                    ? "NA"
                    : markValue === 0
                    ? "0"
                    : !isNaN(markValue)
                    ? markValue
                    : "NA";

                return (
                  <tr key={s.code} className="even:bg-gray-50">
                    <td className="border border-gray-700 px-2 py-1 text-center">
                      {s.code}
                    </td>
                    <td className="border border-gray-700 px-2 py-1">
                      {s.name}
                    </td>
                    <td className="border border-gray-700 px-2 py-1 text-center">
                      {s.credits}
                    </td>
                    <td
                      className={`border border-gray-700 px-2 py-1 text-center font-semibold ${textColor}`}
                    >
                      {displayMark}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* ⚖️ Average */}
          <div className="text-right text-[10.5pt] font-semibold mt-2">
            Average: {totalMarks.toFixed(2)}
          </div>
          
          {/* Footer */}
          <div className="flex justify-between mt-6 text-[9pt] text-gray-700">
            <div className="font-semibold text-[11pt] text-center w-full">
              For student information only not for official use.
            </div>
          </div>
        </div>
      </div>

      {/* 🖨️ Print Button */}
      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 print:hidden"
      >
        Print
      </button>
    </div>
  );
}
