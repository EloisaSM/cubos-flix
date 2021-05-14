import React from "react";

import ContainerMovies from "./containerMovies";
import BannerCupom from "./bannerCumpom";

function MainContainer(props) {
  const { currentMovie, onFilterChange } = props;

  return (
    <main className="App-container-cards">
      <BannerCupom />

      <ContainerMovies
        currentMovie={currentMovie}
        onFilterChange={onFilterChange}
      />
    </main>
  );
}

export default MainContainer;
