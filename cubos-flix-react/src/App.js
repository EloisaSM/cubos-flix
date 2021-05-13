import { useState } from "react";

import Header from "./componentes/header";
import MainContainer from "./componentes/mainContainer";
import Cart from "./componentes/sacola";
import movies from "./data";
import "./App.css";

function App() {
  const [currentMovie, setCurrentMovie] = useState(undefined);

  const onInputHeaderChange = (e) => {
    const inputValue = e.target.value;

    if (e.key !== "Enter") return;

    const filmeEncontrado = movies.find((movie) =>
      movie.title.includes(inputValue)
    );

    setCurrentMovie(filmeEncontrado);
  };

  console.log(currentMovie);

  return (
    <div className="App">
      <Header onSearchChange={onInputHeaderChange} />
      <MainContainer currentMovie={currentMovie} />
      <aside className="App-aside">
        <Cart />
      </aside>
    </div>
  );
}

export default App;
