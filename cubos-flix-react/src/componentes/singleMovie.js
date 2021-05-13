import React from "react";

function SingleMovieSearch(props) {
  const { movie } = props;
  const { backgroundImg, title, starsCount, price } = movie;

  return (
    <div className="single-movie-container">
      <div
        className="filme-card"
        style={{
          background: ` linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url(${backgroundImg}) center center / cover no-repeat `,
        }}
      >
        <img
          className="favorito-img"
          src="images/star.svg"
          alt="icone de favorito"
        />
        <div className="filme-info">
          <div className="title-ranking">
            <h3>{title}</h3>
            <div>
              <img src="images/golden-star.svg" alt="icone favorito dourado" />
              <span>{starsCount}</span>
            </div>
          </div>
          <button>
            Sacola<span>{`R$ ${price}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieSearch;
