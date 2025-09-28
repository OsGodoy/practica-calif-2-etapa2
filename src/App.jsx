import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import ImagesCards from "./components/ImagesCards";
import Header from "./components/Header";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ fontFamily: "Jost" }}
    >
      <Header />
      <main className="w-80 p-4 pb-8 sm:pb-4 gap-4 flex flex-col items-center justify-between">
        <Search setFilter={setFilter} />
        <Filter setFilter={setFilter} />
        <div className="font-bold text-sky-700 text-3xl flex items-center justify-center p-2 capitalize">{`${filter} Pictures`}</div>
        <ImagesCards data={images} isLoading={isLoading} />
      </main>
    </div>
  );
}
