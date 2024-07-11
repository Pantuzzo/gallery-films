import React from "react";
import CarouselMovies from "../CarouselMovies";

function MovieList({ genre }) {
  return (
    <div style={{ padding: "10px 50px" }}>
      <CarouselMovies genre={genre} />
    </div>
  );
}

export default MovieList;
