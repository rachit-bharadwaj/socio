"use client";

import type { SearchFilter } from "@/types";
import { useState } from "react";

const SearchFilter = ({ label }: SearchFilter) => {
  const [active, setActive] = useState("All");
  const setActiveFilter = () => {
    setActive(label);
    console.log(label, active);
  };

  return (
    <button
      onClick={() => setActiveFilter()}
      className={`border px-5 py-2 rounded-full hover:bg-purple-600 
      ${active === label && `bg-purple-600 text-primary-100`} `}
    >
      {label}
    </button>
  );
};

export default SearchFilter;