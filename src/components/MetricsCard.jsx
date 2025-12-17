import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MetricsCard = ({ title, metrics }) => {
  if (!metrics) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-muted-foreground">Average</p>
          <p className="text-lg font-semibold">{metrics.average}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Min</p>
          <p className="text-lg font-semibold">{metrics.min}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Max</p>
          <p className="text-lg font-semibold">{metrics.max}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
