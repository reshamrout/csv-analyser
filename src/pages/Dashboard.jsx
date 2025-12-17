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
    <div className="space-y-6">
      <CsvUploader onDataLoaded={setRows} />

      {rows.length > 0 && (
        <>
          <PersonSelector
            persons={persons}
            selectedPerson={selectedPerson}
            onChange={setSelectedPerson}
          />

          <MetricsCard
            title={
              selectedPerson === "ALL"
                ? "Overall Metrics"
                : `Metrics for ${selectedPerson}`
            }
            metrics={metrics}
          />

          <Charts data={filteredData} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
