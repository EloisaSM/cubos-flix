import React from "react";
import { useState } from "react";

import ListMovies from "./listMovies";
import SingleMovieSearch from "./singleMovie";

const filters = [
  {
    content: "Todos",
    value: "Todos",
  },
  {
    content: "Ação",
    value: "Ação",
  },
  {
    content: "Romance",
    value: "Romance",
  },
  {
    content: "Ficção Cientifica",
    value: "Ficção Cientifica",
  },
  {
    content: "Terror",
    value: "Terror",
  },
];

const filterDefalut = filters[0];

function FilmesandFiltersBtn(props) {
  const { movies, currentMovie } = props;

  const [currentFilter, setCurrentFilter] = useState(filterDefalut.value);

  return (
    <div className="filmes-container">
      <h2>Filmes</h2>
      <div className="filters">
        {filters.map((filter, idx) => (
          <button
            key={`filters-btn-${idx}`}
            className={currentFilter === filter.value ? "selecionado" : ""}
            onClick={() => {
              setCurrentFilter(filter.value);
            }}
          >
            {filter.content}
          </button>
        ))}
      </div>

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

export default FilmesandFiltersBtn;
