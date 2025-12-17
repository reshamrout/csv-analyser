import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const PersonSelector = ({ persons, selectedPerson, onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">
        Filter by person:
      </span>
      <Select value={selectedPerson} onValueChange={onChange}>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="All persons" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All Persons</SelectItem>
          {persons.map((p) => (
            <SelectItem key={p} value={p}>
              {p}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PersonSelector;
