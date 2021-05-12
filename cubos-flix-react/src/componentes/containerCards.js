import movies from "../data";
import MoviesList from "./listaFilmes";

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

function ContainerCards(props) {
  const { currentMovie } = props;
  // return (
  //   {currentMovie !== undefined ? <SingleMovie movie={movie} /> : <MovieList movies={movies} />}
  // )
  const [currentFilter, setCurrentFilter] = useState(filterDefalut.value);

  return (
    <main className="App-container-cards">
      <div className="banner-cupom">
        <div className="ticket-content">
          <div className="cupom-container">
            <h2>aproveite agora</h2>
            <div className="coupom-content">
              {/* <img src="images/coupon-icon.svg" alt="imagem de um cupom" /> */}
              <p>CUPOM: htmlnaoelinguagem</p>
            </div>
          </div>
          <div className="counter-container">
            <h2>Finaliza em:</h2>
            <div className="counter">
              {/* <img src="images/time-icon.svg" alt="" /> */}
              <p> 00:04:52</p>
            </div>
          </div>
          <img src="images/money.png" alt="notas de dinheiro e moedas" />
        </div>
      </div>

      <MoviesList />
    </main>
  );
}

export default ContainerCards;
