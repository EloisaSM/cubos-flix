import Header from "./componentes/header";
import ContainerCards from "./componentes/container";
import Cart from "./componentes/sacola";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerCards />
      <aside className="App-aside">
        <Cart />
      </aside>
    </div>
  );
}

export default App;
