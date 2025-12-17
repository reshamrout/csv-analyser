import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const PersonSelector = ({ persons, selectedPerson, onChange }) => {
  return (
    <Select value={selectedPerson} onValueChange={onChange}>
      <SelectTrigger className="w-64">
        <SelectValue placeholder="Select person" />
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
  );
};

export default PersonSelector;
