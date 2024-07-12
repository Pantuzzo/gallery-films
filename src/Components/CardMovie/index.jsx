import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useFilmContext } from "../../FilmContext";

function CardMovie({ movie }) {
  const navigate = useNavigate();
  const { setSelectedFilm } = useFilmContext();

  const selectMovie = () => {
    setSelectedFilm(movie);
    navigate(`/Description/`);
  };
  return (
    <div className="containerCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={`Image: ${movie.title}`}
        onClick={selectMovie}
      />
    </div>
  );
}

export default CardMovie;
