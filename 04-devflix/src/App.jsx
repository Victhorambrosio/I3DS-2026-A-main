import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        src={logo}
        alt="Logo do serviço de streaming Netflix com destaque para a palavra 'DEVFLIX' em letras vermelhas sob fundo preto."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>
      <Rodape link={"https://github.com/Victhorambrosio"}>Victhor Ambrosio</Rodape>
    </div>
  );
};

export default App;
