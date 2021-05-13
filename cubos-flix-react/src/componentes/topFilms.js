import React from "react";

import ListMovies from "./listMovies";

function TopFilmes(props) {
  const { movies } = props;

  return (
    <div className="top-filmes-container">
      <h2>Top Filmes</h2>
      <div className="filmes-box">
        <ListMovies movies={movies.slice(0, 5)} />
      </div>
    </div>
  );
}

export default TopFilmes;
