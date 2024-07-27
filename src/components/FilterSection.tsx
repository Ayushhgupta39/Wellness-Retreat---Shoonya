import { FC } from "react";

interface Props {
  onDateChange: (date: string) => void;
  onTypeChange: (type: string) => void;
  onSearch: (query: string) => void;
}

const FilterSection: FC<Props> = ({ onDateChange, onTypeChange, onSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div className="flex flex-col sm:flex-row sm:w-1/2">
        <input
          type="date"
          onChange={(e) => onDateChange(e.target.value)}
          className="border border-[#d1d5db] sm:w-1/3 rounded-md m-4 mb-2 p-2 bg-[#efefef]"
        />
        <select
          onChange={(e) => onTypeChange(e.target.value)}
          className="border border-[#d1d5db] sm:w-1/3 m-4 mb-2 rounded-md p-2 bg-[#efefef]"
        >
          <option value="">Filter by Type</option>
          <option value="Signature">Signature</option>
          <option value="Standalone">Standalone</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search retreats by title or location"
        onChange={(e) => onSearch(e.target.value)}
        className="border border-[#d1d5db] sm:w-1/3 m-4 mb-2 rounded-md p-2"
      />
    </div>
  );
};

export default FilterSection;
