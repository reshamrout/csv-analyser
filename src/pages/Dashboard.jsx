import { useMemo, useState } from "react";
import CsvUploader from "../components/CsvUploader";
import MetricsCard from "../components/MetricsCard";
import PersonSelector from "../components/PersonSelector";
import Charts from "../components/Charts";
import { calculateMetrics, groupByPerson } from "../utils/metrics";

const Dashboard = () => {
  const [rows, setRows] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("ALL");

  const grouped = useMemo(() => groupByPerson(rows), [rows]);
  const persons = Object.keys(grouped);

  const filteredData =
    selectedPerson === "ALL"
      ? rows
      : grouped[selectedPerson] || [];

  const metrics =
    filteredData.length > 0 ? calculateMetrics(filteredData) : null;

  return (
    <div className="space-y-8">
      <CsvUploader onDataLoaded={setRows} />

      {rows.length > 0 && (
        <>
          <div className="flex justify-between items-center">
            <PersonSelector
              persons={persons}
              selectedPerson={selectedPerson}
              onChange={setSelectedPerson}
            />
          </div>
          <MetricsCard
            title={
              selectedPerson === "ALL"
                ? "Overall Summary"
                : `Summary for ${selectedPerson}`
            }
            metrics={metrics}
          />
          <Charts
            data={filteredData}
            title="Miles Run Over Time"
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
