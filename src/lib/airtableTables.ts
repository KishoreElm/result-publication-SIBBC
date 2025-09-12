export const airtableTables: Record<string, string> = {
  diploma1: process.env.AIRTABLE_DIPLOMA1 || "",
  diploma2: process.env.AIRTABLE_DIPLOMA2 || "",
  bth1: process.env.AIRTABLE_BTH1 || "",
  bth2: process.env.AIRTABLE_BTH2 || "",
  bth3: process.env.AIRTABLE_BTH3 || "",
  mdiv1: process.env.AIRTABLE_MDIV1 || "",
  mdiv2: process.env.AIRTABLE_MDIV2 || "",
  mdiv3: process.env.AIRTABLE_MDIV3 || "",
  mth2: process.env.AIRTABLE_MTH2 || "",
  mth3: process.env.AIRTABLE_MTH3 || "",
};

// Normalize course into DB-friendly key (lowercase, no dashes/spaces)
// export function normalizeCourseKey(course: string): string {
//   return course.toLowerCase().replace(/[-\s]/g, ""); 
//   // e.g. "BTH-1" → "bth1", "mdiv 2" → "mdiv2"
// }

export function normalizeCourseKey(course: string): string {
  switch (course.toLowerCase()) {
    case "bth1" :
      return "BTH-1";
    case "bth2":
      return "BTH-2";
    case "bth3":
      return "BTH-3";
    case "diploma1":
      return "Diploma-1";
    case "diploma2":
      return "Diploma-2";
    case "mdiv1":
      return "MDIV-1";
    case "mdiv2":
      return "MDIV-2";
    case "mdiv3":
      return "MDIV-3";
    case "mth2":
      return "MTH-2";
    case "mth3":
      return "MTH-3";
    default:
      return course;
  }
}

export const courseLabels: Record<string, string> = {
  bth1: "BTH-1 1-Semester",
  bth2: "BTH-2 3-Semester",
  bth3: "BTH-3 5-Semester",
  diploma1: "Diploma-1 1-Semester",
  diploma2: "Diploma-2 3-Semester",
  mdiv1: "MDIV-1 1-Semester",
  mdiv2: "MDIV-2 3-Semester",
  mdiv3: "MDIV-3 5-Semester",
  mth2: "MTH-2 3-Semester",
  mth3: "MTH-3 5-Semester",
};
