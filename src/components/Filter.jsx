import React, { useEffect, useState } from "react";

export default function Filter({ setImages, setIsLoading }) {
  const [filter, setFilter] = useState("food");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${filter}&per_page=12&orientation=square`,
          {
            headers: {
              Authorization: import.meta.env.VITE_API_KEY,
            },
          }
        );
        const data = await response.json();
        setImages(data.photos);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [filter]);

  return (
    <ul className="text-white sm:w-120 gap-4 grid grid-cols-5 sm:grid-cols-4 items-center justify-center">
      <li
        onClick={() => setFilter("food")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1"
      >
        Food
      </li>
      <li
        onClick={() => setFilter("cars")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1"
      >
        Cars
      </li>
      <li
        onClick={() => setFilter("animals")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1 col-start-2"
      >
        Animals
      </li>
      <li
        onClick={() => setFilter("nature")}
        className="cursor-pointer hover:scale-105 transition-all duration-100 active:bg-sky-700 active:scale-95 md:active:scale-105 bg-slate-800 flex items-center justify-center px-1.5 py-0.5 rounded-sm col-span-2 sm:col-span-1 col-start-4"
      >
        Nature
      </li>
    </ul>
  );
}
