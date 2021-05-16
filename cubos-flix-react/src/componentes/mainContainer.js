import React from "react";

import ContainerMovies from "./containerMovies";
import BannerCupom from "./bannerCumpom";

function MainContainer(props) {
  const { currentMovie } = props;

  return (
    <main className="App-container-cards">
      <BannerCupom />

      <ContainerMovies currentMovie={currentMovie} />
    </main>
  );
}

export default MainContainer;
