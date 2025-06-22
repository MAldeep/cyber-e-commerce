import { useEffect, useState } from "react";
import SearchField from "./SearchField";
import { baseUrl } from "../store";
import axios from "axios";

export default function AccordionItem() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const { URL } = baseUrl();
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/api/filters`).then((res) => {
      setFilters(res.data.data);
    });
  }, []);
  return (
    <div className="rounded-lg overflow-hidden w-full lg:w-[256px] flex flex-col basis-[50%]">
      <button
        className="flex justify-between items-center p-4 w-full focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-medium text-gray-700">Categories</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="divider w-full h-[0.5px] bg-[#B5B5B5]"></div>
      <div
        className={`px-4 overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="text-gray-600 flex flex-col gap-[24px]">
          <SearchField className="bg-[#F5F5F5] hidden md:flex gap-[10px] rounded-2xl items-center p-[16px] w-full" />
          <div className="flex flex-col gap-[10px]">
            {filters.map((el) => (
              <div key={el.documentId} className="flex gap-[20px] items-center">
                <label className="relative flex items-center cursor-pointer group">
                  <input className="peer sr-only" type="checkbox" />
                  <div className="w-6 h-6 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {el.title}
                  </span>
                </label>
              </div>
            ))}
          </div>
          <button className="bg-[#000000] text-[#FFFFFF] border-0 text-[14px] font-[500] px-[64px] py-[12px] rounded-[8px] cursor-pointer">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
