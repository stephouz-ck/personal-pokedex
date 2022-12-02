import { TextInput } from "@mantine/core";
import { useState } from "react";
import { Search } from "tabler-icons-react";
import { SearchbarProps } from "./Searchbar.types";

const Searchbar = ({ allPokemon }: SearchbarProps) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    allPokemon.filter((searchedPokemon) => {
      return searchedPokemon.name.match(searchInput);
    });
  }

  return (
    <TextInput
      icon={<Search scale={16} />}
      placeholder="Search..."
      value={searchInput}
      onChange={handleChange}
    />
  );
};

export default Searchbar;
