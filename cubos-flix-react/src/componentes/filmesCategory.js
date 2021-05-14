import React from "react";

import ListMovies from "./listMovies";
import SingleMovieSearch from "./singleMovie";
import FilterBtn from "./filtersBtn";

function FilmesCategory(props) {
  const { movies, currentMovie } = props;

  return (
    <div className="filmes-container">
      <h2>Filmes</h2>

      <FilterBtn />

      {currentMovie ? (
        <SingleMovieSearch movie={currentMovie} />
      ) : (
        <div className="filmes-box">
          <ListMovies movies={movies.slice(0, 7)} />
        </div>
      )}
    </div>
  );
}

export default FilmesCategory;
