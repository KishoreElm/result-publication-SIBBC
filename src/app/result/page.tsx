import { fetchAirtableRecords } from "@/lib/airtable";
import { airtableTables } from "@/lib/airtableTables";
import { courseSubjects } from "@/lib/subjects";
import { normalizeCourseKey } from "@/lib/airtableTables";
import ResultClient from "./ResultClient";

type StudentFields = {
  RollNo?: string;
  OriginalName?: string;
  Course?: string;
  Batch?: string;
  [key: string]: any;
};

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
  const subjects = courseSubjects[normalizedCourse];

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
  } catch (err: any) {
    return <div className="p-6 text-red-600">⚠️ Error: {err.message}</div>;
  }

  if (!student) {
    return (
      <div className="p-6 text-red-600">
        ❌ No record found for Roll No: {rollNo}
      </div>
    );
  }

  // ✅ Each subject has a max mark = 100
  const { totalScore } = subjects.reduce(
    (acc, subj) => {
      const score = parseFloat(student?.[subj.field]) || 0;
      return { totalScore: acc.totalScore + score };
    },
    { totalScore: 0 }
  );

  // Max marks = number of subjects × 100
  const totalMax = subjects.length * 100;

  // Average in %
  const average = totalMax ? (totalScore / totalMax) * 100 : 0;

  return (
    <ResultClient
      student={student}
      subjects={subjects}
      totalMarks={average}
      course={course}
      rollNo={rollNo}
    />
  );
}
