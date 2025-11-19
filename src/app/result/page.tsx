import { fetchAirtableRecords } from "@/lib/airtable";
import { airtableTables, normalizeCourseKey } from "@/lib/airtableTables";
import { courseSubjects, Subject } from "@/lib/subjects";
import ResultClient from "./ResultClient";
import Image from "next/image";

interface StudentFields {
  RollNo?: string;
  OriginalName?: string;
  Course?: string;
  Batch?: string;
  [key: string]: string | number | undefined;
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ rollNo?: string; course?: string }>;
}) {
  const { rollNo, course } = await searchParams;

  if (!rollNo || !course) {
    return (
      <div className="p-6 text-red-600">
        ❌ Provide both <b>rollNo</b> and <b>course</b>.
      </div>
    );
  }

  const normalizedCourse = normalizeCourseKey(course);
  const subjects: Subject[] | undefined = courseSubjects[normalizedCourse];

  const tableName = airtableTables[course];
  if (!tableName) {
    return <div className="p-6 text-red-600">❌ Invalid course: {course}</div>;
  }

  if (!subjects) {
    return (
      <div className="p-6 text-red-600">
        ❌ No subject mapping found for {course}
      </div>
    );
  }

  let student: StudentFields | undefined;
  try {
    const records = await fetchAirtableRecords<StudentFields>(tableName, {
      view: "Grid view",
    });

    student = records.find(
      (r) => String(r.fields.RollNo).trim() === rollNo.trim()
    )?.fields;
  } catch (err) {
    const error = err as Error;
    return <div className="p-6 text-red-600">⚠️ Error: {error.message}</div>;
  }

  if (!student) {
    return (
      <div className="p-6 text-red-600">
        ❌ No record found for Roll No: {rollNo}
      </div>
    );
  }



// Calculate only valid marks (exclude "Not Applicable")
const validSubjects = subjects.filter((subj) => {
  const score = student?.[subj.field];
  
  return  score;
});

const totalScore = validSubjects.reduce((sum, subj) => {
  const score = Number(student?.[subj.field]) || 0;
  return sum + score;
}, 0);

const totalMax = validSubjects.length * 100;

// ✅ Safe average calculation
const average = totalMax ? (totalScore / totalMax) * 100 : 0;



  return (

     <div className="relative w-full h-lvh flex items-center justify-center overflow-hidden">
    
          <Image
            src="/images/Copy of COLLEGE MAIN BLOCK.jpg"
            alt="College Main Block"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" >
          </div>

          <div className="z-index-10 relative w-full flex items-center justify-center">
            {/* <AirtablePage /> */}
          <ResultClient
            student={student}
            subjects={subjects}
            totalMarks={average}
            course={course}
            rollNo={rollNo}
          />
          </div>
        </div>
  );
}
