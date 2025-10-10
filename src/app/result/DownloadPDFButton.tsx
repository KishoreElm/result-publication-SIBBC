"use client";

import { courseLabels } from "@/lib/airtableTables";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface Subject {
  code: string;
  name: string;
  credits: number;
  field: string;
}

interface Student {
  OriginalName?: string;
  [key: string]: string | number | undefined;
}

interface DownloadPDFButtonProps {
  student: Student;
  subjects: Subject[];
  totalMarks: number;
  rollNo: string;
  course: string;
  batch: string;
}

export default function DownloadPDFButton({
  student,
  subjects,
  totalMarks,
  rollNo,
  course,
  batch,
}: DownloadPDFButtonProps) {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Add Logo (if hosted in /public/images)
    const imgUrl = "/images/SIBBC_Logo_New_40_yellow.png";
    doc.addImage(imgUrl, "PNG", 60, 10, 80, 25); // (x, y, width, height)

    // College details
    doc.setFontSize(10);
    doc.text(
      "Baptist Nagar, No.4 Veerapandi, Coimbatore, Tamil Nadu - 641019",
      50,
      40
    );
    doc.text(
      "An Accredited Member Of The Asia Theological Association",
      55,
      46
    );

    // Title
    doc.setFontSize(14);
    doc.text(`${courseLabels[course]} Batch - ${batch} `, 60, 55);

    // Student Info
    doc.setFontSize(12);
    doc.text(`Name: ${student?.OriginalName ?? "-"}`, 14, 70);
    doc.text(`Roll No: ${rollNo}`, 150, 70);
    // doc.text(`Course:  ${courseLabels[course]}`, 14, 78);
    // doc.text(`Batch: ${batch}`, 120, 70);

    // Table
    autoTable(doc, {
      head: [["Code", "Name", "Credits", "Marks"]],
      body: subjects.map((s) => [
        s.code,
        s.name,
        s.credits ,
        student?.[s.field] ?? "N/A",
      ]),
      startY: 80,
    });

    //  Footer (credits + marks)

    const finalY = doc.lastAutoTable?.finalY ?? 100;

    doc.setFontSize(12);
    // doc.text("No. of Credits Required: 19", 14, finalY + 10);
    doc.text(`Average: ${totalMarks.toFixed(2)}`, 145, finalY + 12);

    //  Save File
    doc.save(`${student?.OriginalName ?? "student "}_${rollNo}_Semester_Result.pdf`);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleDownload}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  );
}
