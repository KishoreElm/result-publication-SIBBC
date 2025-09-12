import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function fetchAirtableRecords<T>(
  tableName: string,
  options: { view?: string } = {}
): Promise<{ id: string; fields: T }[]> {
  return new Promise((resolve, reject) => {
    const records: { id: string; fields: T }[] = [];

    base(tableName)
      .select(options)
      .eachPage(
        (fetched, next) => {
          fetched.forEach((r) =>
            records.push({ id: r.id, fields: r.fields as T })
          );
          next();
        },
        (err) => {
          if (err) reject(err);
          else resolve(records);
        }
      );
  });
}
