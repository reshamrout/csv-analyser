import Papa from "papaparse";

export function parseCSV(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const { data, errors, meta } = results;

        const requiredHeaders = ["date", "person", "miles"];
        const headers = meta.fields || [];

        const missing = requiredHeaders.filter(h => !headers.includes(h));
        if (missing.length) {
          reject(`Missing headers: ${missing.join(", ")}`);
          return;
        }

        const parsed = data.map((row, idx) => {
          if (!row.date || !row.person || isNaN(row.miles)) {
            throw new Error(`Invalid data at row ${idx + 2}`);
          }
          return {
            date: new Date(row.date),
            person: row.person.trim(),
            miles: Number(row.miles)
          };
        });

        resolve(parsed);
      },
      error: () => reject("CSV parsing failed")
    });
  });
}
