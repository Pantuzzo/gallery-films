import React, { useEffect } from "react";
import { useFilmContext } from "../../FilmContext";
import genres from "../../constants/genres";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { FilmProvider } from "../../FilmContext";

const InfoMovie = () => {
  const { selectedFilm } = useFilmContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFilm == null) {
      navigate("/", { replace: true });
    }
  }, [navigate, selectedFilm]);

  if (!selectedFilm) {
    return null;
  }

  const getGenreNamesByIds = () => {
    return selectedFilm.genre_ids.map((id) => {
      const genre = genres.find((item) => item.id === id);
      return genre ? genre.name : "Gênero desconhecido";
    });
  };
  const genreNames = getGenreNamesByIds();
  return (
    <FilmProvider>
      <div className="container-info">
        <div className="container-info__img">
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedFilm.poster_path}`}
            alt=""
          />
        </div>
        <div className="container-info__description">
          <h1>{selectedFilm.title}</h1>
          <label>{selectedFilm.overview}</label>
          <div className="release">
            <label className="titleFont">Film premiere:</label>
            <label>{selectedFilm.release_date}</label>
          </div>
          <div className="container-info__description__genres">
            <label className="titleFont">Genres:</label>
            <ul>
              {genreNames.map((genre, index) => {
                return (
                  <li>
                    <label key={index}>{genre}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </FilmProvider>
  );
};

export default InfoMovie;
