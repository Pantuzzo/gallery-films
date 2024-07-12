import React from "react";
import CarouselMovies from "../CarouselMovies";

function MovieList({ genre, page }) {
  return (
    <div style={{ padding: "10px 50px" }}>
      <CarouselMovies genre={genre} page={page} />
    </div>
  );
}

export default MovieList;
