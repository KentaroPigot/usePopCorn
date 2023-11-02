import React, { useEffect, useRef, useState } from "react";
import useKey from "./hooks/useKey";

function Search({ query, setQuery }) {
  const inputEl = useRef(null); // useRef va récupérer la valeur de l'element seulement après le render. Donc il faut l'utiliser avec useEffect

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });
  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputEl.current) return;
  //       if (e.code === "Enter") {
  //         inputEl.current.focus();

  //         setQuery("");
  //       }
  //     }

  //     document.addEventListener("keydown", callback);
  //     return () => document.removeEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
