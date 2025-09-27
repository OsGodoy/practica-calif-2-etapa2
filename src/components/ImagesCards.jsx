import React, { useState } from "react";
import Skeletons from "./Skeletons";

export default function ImagesCards({ data, isLoading }) {
  return (
    <>
      <ul className="w-80 sm:w-128 md:w-190 lg:w-250 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 place-items-center">
        {!isLoading ? (
          data.map((foto) => (
            <li className="h-50 w-58" key={`${foto.id}`}>
              <img
                className="h-full w-full object-cover drop-shadow-md"
                src={foto.src.original}
                alt=""
                loading="lazy"
              />
            </li>
          ))
        ) : (
          <Skeletons />
        )}
      </ul>
    </>
  );
}
