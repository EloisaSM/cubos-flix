import movies from "../data";
import TopFilmes from "./topFilms";
import FilmesCategory from "./filmesCategory";

import React from "react";

function ContainerMovies(props) {
  const { currentMovie } = props;
  return (
    <>
      <TopFilmes movies={movies} />
      <FilmesCategory movies={movies} currentMovie={currentMovie} />
    </>
  );
}

export default ContainerMovies;
