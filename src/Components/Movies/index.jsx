import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2QyNzQ3NWZlZGRlMTgzMGMxZjNiMDIxZjg3OWUwOCIsIm5iZiI6MTcyMDYzMDYxOC41NDAyMzMsInN1YiI6IjYxMWJjYmJhNjY1NDA4MDA1ZTExOTdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ui8XmMZ3d99XN7ZpNvBFrBYa7mgboNwH365Ttjhkbl4",
            },
          }
        );
        setMovies(response.data.results); // Assumindo que os resultados estão na propriedade results
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10px",
            background: "white",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
