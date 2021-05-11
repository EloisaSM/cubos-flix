import Header from "./componentes/header";
import ContainerCards from "./componentes/container";
import Aside from "./componentes/sacola";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ContainerCards />
      <Aside />
    </div>
  );
}

export default App;
