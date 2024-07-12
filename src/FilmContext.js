import React, { createContext, useContext, useState } from "react";

const FilmContext = createContext();

export const useFilmContext = () => {
  const context = useContext(FilmContext);
  if (!context) {
    throw new Error("useFilmContext must be used within a FilmProvider");
  }

  return context;
};

export const FilmProvider = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <FilmContext.Provider value={{ selectedFilm, setSelectedFilm }}>
      {children}
    </FilmContext.Provider>
  );
};
