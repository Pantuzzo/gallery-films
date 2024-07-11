import React, { useEffect, useState } from "react";
import "./index.scss";
import CardMovie from "../CardMovie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fetchMoviesAPI from "../../services/movieService";
import genres from "../../constants/genres";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 6.1,
    partialVisibilityGutter: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

function BannerCarousel(genre) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesAPI({
          page: 1,
          sort_by: "popularity.desc",
          with_genres: genre.genre,
        });
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [genre.genre]);

  const foundGenre = genres.find((item) => item.id === parseInt(genre.genre));

  return (
    <div className="container-Carousel">
      <label style={{ color: "white" }}>{foundGenre.name}</label>
      <Carousel
        additionalTransfrom={6}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </Carousel>
    </div>
  );
}

export default BannerCarousel;
