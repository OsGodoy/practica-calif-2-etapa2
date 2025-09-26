import React from "react";

export default function Search() {
  return (
    <>
      <span className="h-10 w-[90%] flex items-center justify-center">
        <search className="bg-slate-200 h-full w-full flex items-center justify-between rounded-full p-2">
          <input
            className="outline-none p-2"
            type="text"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 p-1 text-slate-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </search>
      </span>
    </>
  );
}
