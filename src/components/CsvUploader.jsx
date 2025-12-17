import { useState } from "react";
import { parseCSV } from "../utils/csvParser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CsvUploader = ({ onDataLoaded }) => {
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setError("");
      const data = await parseCSV(file);
      onDataLoaded(data);
    } catch (err) {
      setError(err.toString());
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload CSV File</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-sm
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:bg-primary file:text-primary-foreground
            hover:file:bg-primary/90"
        />
        <p className="text-xs text-muted-foreground">
          Required columns: <b>date, person, miles</b>
        </p>
        {error && (
          <p className="text-sm text-red-500 font-medium">{error}</p>
        )}
      </CardContent>
    </Card>
  );
};
export default CsvUploader;
