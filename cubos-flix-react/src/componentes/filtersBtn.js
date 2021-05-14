import React from "react";
import { useState } from "react";

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

function FilterBtn() {
  const [currentFilter, setCurrentFilter] = useState(filterDefalut.value);

  return (
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
  );
}

export default FilterBtn;
