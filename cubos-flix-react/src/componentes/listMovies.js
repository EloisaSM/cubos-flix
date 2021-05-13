import React from "react";

function ListMovies(props) {
  const { movies } = props;
  return (
    <div className="filmes-box">
      {movies.map((m, idx) => (
        <div
          key={`movie-list-${idx}`}
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
      ))}
    </div>
  );
}

export default ListMovies;
