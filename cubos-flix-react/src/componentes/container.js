import React from "react";

function ContainerCards() {
  return (
    <main className="App-container-cards">
      <div className="banner-cupom">
        <div className="ticket-content">
          <h2>aproveite agora</h2>
          <div>
            <img src="" alt="" />
            <p>CUPOM: htmlnaoelinguagem</p>
          </div>
        </div>
      </div>

      <div className="top-filmes">
        <h2>Top Filmes</h2>
        <div className="filme-card">filme</div>
      </div>

      <div className="top-filmes">
        <h2>Top Filmes</h2>
        <div className="filters">
          <button>Todos</button>
          <button>Ação</button>
          <button>Romance</button>
          <button>Ficção científica</button>
          <button>Terror</button>
        </div>
        <div className="filme-card">filme</div>
      </div>
    </main>
  );
}

export default ContainerCards;
