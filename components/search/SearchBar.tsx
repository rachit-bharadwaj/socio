import { CiSearch } from "react-icons/ci";
import { Posts } from "../home";
import SearchFilter from "@/templates/search/SearchFilter";

const SearchBar = () => {
  return (
    <div className="p-3">
      <div className="flex items-center gap-7 border px-5 py-2  rounded-full my-2">
        <input
          type="text"
          placeholder="Search for people, Posts, tags..."
          className="bg-transparent flex-1 truncate "
        />
        <CiSearch className="text-2xl" />
      </div>
      <div className="py-5">
        <p className="text-xl font font-medium py-3">Popular</p>
        <div className="flex gap-3">
          <SearchFilter label="All" />
          <SearchFilter label="Profiles" />
          <SearchFilter label="Posts" />
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default SearchBar;