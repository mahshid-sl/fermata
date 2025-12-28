import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="max-w-md mx-auto ">
      <label
        htmlFor="search"
        className="block mb-2.5 text-sm font-medium text-heading sr-only "
      >
        Search
      </label>
      <div className="flex items-center ">
        <Search />
        <input
          type="search"
          id="search"
          className="w-full  border  text-heading rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-full p-2 text-lg"
          placeholder="جستجو در منو..."
          required
        />
      </div>
    </form>
  );
}
