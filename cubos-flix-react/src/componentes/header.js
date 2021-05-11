import React from "react";

function Header() {
  return (
    <header className="App-header">
      <div className="input-container">
        <div className="icon">
          <img src="/" alt="" />
        </div>
        <input type="search" />
      </div>

      <div className="btn-container">
        <button>
          <img src="" alt="" />
          Favoritos
        </button>
        <button>
          <img src="" alt="" />
          Promoções
        </button>
      </div>

      <div className="user">
        <p>Bem vinda Eloisa</p>
        <img src="" alt="" />
      </div>
    </header>
  );
}

export default Header;
