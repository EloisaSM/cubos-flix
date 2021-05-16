import React from "react";

function Header(props) {
  const { onSearchChange } = props;

  return (
    <header className="App-header">
      <div className="input-container">
        <div className="icon">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="input-search">
          <img src="images/search-icon.svg" alt="" />
          <input
            type="text"
            placeholder="Pesquise filmes..."
            onKeyPress={onSearchChange}
          />
        </div>
      </div>

      <div className="btn-container">
        <button className="fav-btn">
          <img src="/bookmark-icon.svg" alt="" />
          Favoritos
        </button>
        <button className="promo-btn">
          <img src="/promotion-icon.svg" alt="" />
          Promoções
        </button>
      </div>

      <div className="user">
        <p>Bem vinda Eloisa</p>
        <img src="/profile.jpg" alt="" />
      </div>
    </header>
  );
}

export default Header;
