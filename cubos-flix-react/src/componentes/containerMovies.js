import movies from "../data";
import TopFilmes from "./topFilms";
import FilmesAndFiltersBtn from "./filmesAndFiltersBtn";

import React from "react";

function ContainerMovies(props) {
  const { currentMovie } = props;
  return (
    <>
      <TopFilmes movies={movies} />
      <FilmesAndFiltersBtn movies={movies} currentMovie={currentMovie} />
    </>
  );
}

export default ContainerMovies;
