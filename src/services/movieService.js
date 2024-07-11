import axios from "axios";

async function fetchMoviesAPI(params) {
  const { page, sort_by, with_genres } = params;

  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          include_adult: false,
          include_video: false,
          lenguage: "en-US",
          page: page || 1,
          sort_by: sort_by || "popularity.desc",
          with_genres: with_genres || "",
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2QyNzQ3NWZlZGRlMTgzMGMxZjNiMDIxZjg3OWUwOCIsIm5iZiI6MTcyMDYzMDYxOC41NDAyMzMsInN1YiI6IjYxMWJjYmJhNjY1NDA4MDA1ZTExOTdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ui8XmMZ3d99XN7ZpNvBFrBYa7mgboNwH365Ttjhkbl4",
          accept: "application/json",
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    throw error;
  }
}

export default fetchMoviesAPI;
