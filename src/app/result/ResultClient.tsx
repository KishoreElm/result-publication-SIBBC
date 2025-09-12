// "use client";

// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import Image from "next/image";
// import DownloadPDFButton from "./DownloadPDFButton";
// import { courseLabels } from "@/lib/airtableTables";

// export default function ResultClient({
//   student,
//   subjects,
//   totalMarks,
//   course,
//   rollNo,
// }: {
//   student: any;
//   subjects: any[];
//   totalMarks: number;
//   course: string;
//   rollNo: string;
// }) {
//   const printRef = useRef<HTMLDivElement>(null);

//   const handlePrint = useReactToPrint({
//     contentRef: printRef,
//   });

//   const batch = student?.Batch;

//   return (
//     <div className="p-6 w-[1500px] mx-auto">

//       <div className="flex justify-end gap-4 mb-4">
//         <button
//           onClick={handlePrint}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Print
//         </button>
//         <DownloadPDFButton
//           student={student}
//           subjects={subjects}
//           totalMarks={totalMarks}
//           rollNo={rollNo}
//           course={course}
//           batch={batch}
//         />
//       </div>

//       <div ref={printRef} className="border p-6 printable  flex flex-col ">
//         <div className="flex justify-center mb-4">
//           <Image
//             src="/images/SIBBC_Logo_New_40_yellow.png"
//             alt="Logo"
//             height={40}
//             width={400}
//             priority
//           />
//         </div>

//         <div className="text-center mb-4">
//           <p>Baptist Nagar, No.4 Veerapandi, Coimbatore, Tamil Nadu - 641019</p>
//           <p>An Accredited Member Of The Asia Theological Association</p>
//           <p className="font-semibold text-lg">Student Transcript</p>
//         </div>

//         <div className="flex justify-around text-lg font-bold">
//           <div>Name: {student?.OriginalName ?? "-"}</div>
//           <div>Roll No: {rollNo}</div>
//           <div>Course: {courseLabels[course]}</div>
//           <div>Batch: {batch}</div>
//         </div>

//         <table className="border-collapse border border-black border-2 w-full my-6">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="border px-4 py-2">Subject Code</th>
//               <th className="border px-4 py-2">Subject Name</th>
//               <th className="border px-4 py-2">Credits</th>
//               <th className="border px-4 py-2">Marks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subjects.map((s) => (
//               <tr key={s.code}>
//                 <td className="border border-2 px-4 py-2 w-[20%]">{s.code}</td>
//                 <td className="border border-2 px-4 py-2 w-[40%]">{s.name}</td>
//                 <td className="border border-2 px-4 py-2 text-center w-[20%]">{s.credits}</td>
//                 <td className="border border-2 px-4 py-2 text-center w-[20%]">
//                   {student?.[s.field] ?? "0"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="flex justify-between p-6 font-semibold mx-6">
//           <div>No. of Credits Required: {}</div>
//           <div>Average: {totalMarks}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className="p-6 w-[1500px] mx-auto">
      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-600 text-white rounded"
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

      {/* Printable Section */}
      <div ref={printRef} className="border p-6 printable flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/SIBBC_Logo_New_40_yellow.png"
            alt="Logo"
            height={40}
            width={400}
            priority
          />
        </div>

        {/* Header Info */}
        <div className="text-center mb-4">
          <p>Baptist Nagar, No.4 Veerapandi, Coimbatore, Tamil Nadu - 641019</p>
          <p>An Accredited Member Of The Asia Theological Association</p>
          <p className="font-semibold text-lg">Student Transcript</p>
        </div>

        {/* Student Info */}
        <div className="flex justify-around text-lg font-bold ">
          <div>
            <div>Name: {student?.OriginalName ?? "-"}</div>
            <div>Roll No: {rollNo}</div>
          </div>
          <div>
            <div>Course: {courseLabels[course]}</div>
            <div>Batch: {batch}</div>
          </div>
        </div>

        {/* Subjects Table */}
        <table className="border-collapse border border-black border-2 w-full my-6">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="border px-4 py-2">Subject Code</th>
              <th className="border px-4 py-2">Subject Name</th>
              <th className="border px-4 py-2">Credits</th>
              <th className="border px-4 py-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s) => (
              <tr key={s.code}>
                <td className="border border-2 px-4 py-2 w-[20%]">{s.code}</td>
                <td className="border border-2 px-4 py-2 w-[40%]">{s.name}</td>
                <td className="border border-2 px-4 py-2 text-center w-[20%]">
                  {s.credits}
                </td>
                <td className="border border-2 px-4 py-2 text-center w-[20%]">
                  {student?.[s.field] ?? "0"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Info */}
        <div className="flex justify-between p-6 font-semibold mx-6">
          <div>No. of Credits Required: {/* You can calculate here */}</div>
          <div>Average: {totalMarks}</div>
        </div>
      </div>
    </div>
  );
}
