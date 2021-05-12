import movies from "../data";
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

function MoviesList() {
  const [currentFilter, setCurrentFilter] = useState(filterDefalut.value);

  return (
    <>
      <div className="top-filmes-container">
        <h2>Top Filmes</h2>
        <div className="filmes-box">
          {movies
            .map((m) => (
              <div
                className="filme-card"
                style={{
                  background: ` linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url(${m.backgroundImg}) center center / cover no-repeat `,
                }}
              >
                <img
                  className="favorito-img"
                  src="images/star.svg"
                  alt="icone de favorito"
                />
                <div className="filme-info">
                  <div className="title-ranking">
                    <h3>{m.title}</h3>
                    <div>
                      <img
                        src="images/golden-star.svg"
                        alt="icone favorito dourado"
                      />
                      <span>{m.starsCount}</span>
                    </div>
                  </div>
                  <button>
                    Sacola<span>{`R$ ${m.price}`}</span>
                  </button>
                </div>
              </div>
            ))
            .slice(0, 5)}
        </div>
      </div>

      <div className="filmes-container">
        <h2>Filmes</h2>
        <div className="filters">
          {filters.map((filter) => (
            <button
              className={currentFilter === filter.value ? "selecionado" : ""}
              onClick={() => {
                setCurrentFilter(filter.value);
              }}
            >
              {filter.content}
            </button>
          ))}
        </div>

        <div className="filmes-box">
          {movies.map((m) => (
            <div
              className="filme-card"
              style={{
                background: ` linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url(${m.backgroundImg}) center center / cover no-repeat `,
              }}
            >
              <img
                className="favorito-img"
                src="images/star.svg"
                alt="icone de favorito"
              />
              <div className="filme-info">
                <div className="title-ranking">
                  <h3>{m.title}</h3>
                  <div>
                    <img
                      src="images/golden-star.svg"
                      alt="icone de favorito dourado"
                    />
                    <span>{m.starsCount}</span>
                  </div>
                </div>
                <button>
                  Sacola<span>{`R$ ${m.price}`}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesList;
