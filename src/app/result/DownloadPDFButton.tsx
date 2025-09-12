"use client";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface DownloadPDFButtonProps {
  student: any;
  subjects: any[];
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
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    // Add Logo (if hosted in /public/images)
    const imgUrl = "/images/SIBBC_Logo_New_40_yellow.png";
    doc.addImage(imgUrl, "PNG", 60, 10, 90, 20); // (x, y, width, height)

    // College details
    doc.setFontSize(10);
    doc.text(
      "Baptist Nagar, No.4 Veerapandi, Coimbatore, Tamil Nadu - 641019",
      50,
      40
    );
    doc.text("An Accredited Member Of The Asia Theological Association", 55, 46);

    // Title
    doc.setFontSize(14);
    doc.text("Student Transcript", 80, 55);

    // Student Info
    doc.setFontSize(12);
    doc.text(`Name: ${student?.OriginalName ?? "-"}`, 14, 70);
    doc.text(`Roll No: ${rollNo}`, 100, 70);
    doc.text(`Course: ${course}`, 14, 78);
    doc.text(`Batch: ${batch}`, 100, 78);

    // Table
    autoTable(doc, {
      head: [["Code", "Name", "Credits", "Marks"]],
      body: subjects.map((s) => [
        s.code,
        s.name,
        s.credits,
        student?.[s.field] ?? "-",
      ]),
      startY: 90,
    });

    //  Footer (credits + marks)
    const finalY = (doc as any).lastAutoTable?.finalY || 100;
    doc.setFontSize(12);
    doc.text("No. of Credits Required: 19", 14, finalY + 10);
    doc.text(`Overall Marks: ${totalMarks}`, 150, finalY + 10);

    //  Save File
    doc.save("student_transcript.pdf");
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
