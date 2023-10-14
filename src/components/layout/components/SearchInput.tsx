"use client";
import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div className="w-full mx-20">
      <input
        onChange={(e: any) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search Games ...."
        className="border border-gray-600 rounded-full w-full px-4 py-2 text-lg"
      />
    </div>
  );
};

export default SearchInput;
