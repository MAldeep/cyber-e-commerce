import { CiSearch } from "react-icons/ci";

export default function SearchField({className}) {
  return (
    <div className={className}>
      <CiSearch className="text-[24px] text-[#656565]"/>
      <input
        type="search"
        placeholder="Search"
        className="outline-0 border-0 bg-transparent text-[14px] w-full"
      />
    </div>
  );
}
