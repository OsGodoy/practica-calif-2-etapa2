import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import ImagesCards from "./components/ImagesCards";
import Header from "./components/Header";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=food&per_page=12&orientation=square",
        {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        }
      );
      const data = await response.json();
      setIsLoading(false);
      setImages(data.photos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header />
      <main className="w-80 p-4 pb-8 sm:pb-4 gap-4 flex flex-col items-center justify-between">
        <Search />
        <Filter setImages={setImages} setIsLoading={setIsLoading} />
        <ImagesCards data={images} isLoading={isLoading} />
      </main>
    </div>
  );
}
