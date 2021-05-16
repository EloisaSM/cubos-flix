import React from "react";
import { useState } from "react";

const filters = [
  {
    content: "Todos",
    value: "Todos",
    categoria: "Todos",
  },
  {
    content: "Ação",
    value: "Ação",
    category: "action",
  },
  {
    content: "Romance",
    category: "romance",
  },
  {
    content: "Ficção Cientifica",
    value: "Ficção Cientifica",
    category: "science fiction",
  },
  {
    content: "Terror",
    value: "Terror",
    category: "horror",
  },
];

const filterDefalut = filters[0];

function FilterBtn(props) {
  const { movies, onFilter } = props;
  const [selectedFilter, setSelectedFilter] = useState(filterDefalut.value);

  function changeFilter(category, filterContent) {
    const filteredMovies = movies.filter((movie) =>
      movie.categories.includes(category)
    );

    setSelectedFilter(filterContent);
    onFilter(filteredMovies);
  }

  return (
    <div className="filters">
      {filters.map((filter, idx) => (
        <button
          key={`filters-btn-${idx}`}
          className={selectedFilter === filter.content ? "selecionado" : ""}
          onClick={() => {
            changeFilter(filter.category, filter.content);
          }}
        >
          {filter.content}
        </button>
      ))}
    </div>
  );
}

export default FilterBtn;
