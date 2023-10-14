import Image from "next/image";
import Logo from "@/assets/logo.webp";
import DarkMode from "./components/DarkMode";
import SearchInput from "./components/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <header className="px-20 flex justify-between items-center py-4 bg-white shadow-md">
      <div className="w-12">
        <Image src={Logo} alt="logo" />
      </div>
      <SearchInput onSearch={onSearch} />
      <div className="w-12">
        <DarkMode />
      </div>
    </header>
  );
};

export default Navbar;
