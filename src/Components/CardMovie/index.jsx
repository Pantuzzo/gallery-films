import React from "react";
import "./index.scss";

function CardMovie({ movie }) {
  return (
    <div className="containerCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={`Image: ${movie.title}`}
      />
    </div>
  );
}

export default CardMovie;
