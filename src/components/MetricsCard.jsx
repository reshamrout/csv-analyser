import { Card, CardContent } from "@/components/ui/card";

const MetricItem = ({ label, value }) => (
  <div className="text-center">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

const MetricsCard = ({ title, metrics }) => {
  if (!metrics) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-3 gap-6">
          <MetricItem label="Average Miles" value={metrics.average} />
          <MetricItem label="Minimum Miles" value={metrics.min} />
          <MetricItem label="Maximum Miles" value={metrics.max} />
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
