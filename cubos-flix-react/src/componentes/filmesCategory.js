import React from "react";
import { useState } from "react";

import ListMovies from "./listMovies";
import SingleMovieSearch from "./singleMovie";
import SingleMovieFiltered from "./singleMovieFiltered";
import FilterBtn from "./filtersBtn";

function FilmesCategory(props) {
  const { movies, currentMovie } = props;

  const [filteredMovies, setFiltereMovies] = useState(movies);

  function onFilterChange(filteredMovies) {
    if (!filteredMovies.length) {
      return setFiltereMovies(movies);
    }

    console.log(filteredMovies);

    setFiltereMovies(filteredMovies);
  }

  return (
    <div className="filmes-container">
      <h2>Filmes</h2>

      <FilterBtn movies={movies} onFilter={onFilterChange} />

      {currentMovie ? (
        <SingleMovieSearch movie={currentMovie} />
      ) : (
        <div className="filmes-box">
          <ListMovies movies={filteredMovies} />
        </div>
      )}
    </div>
  );
}

export default FilmesCategory;
