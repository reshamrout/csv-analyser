import { useState } from "react";
import { parseCSV } from "../utils/csvParser";
import { Button } from "@/components/ui/button";

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
    <div className="space-y-2">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="block"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default CsvUploader;
