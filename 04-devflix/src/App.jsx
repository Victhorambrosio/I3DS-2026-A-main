import { useState } from "react";
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  const [movies; setMovies] = useState([]);
  
  //Utilizando uma CHAVE de API do arquivo .env
const apiKey = import.meta.env.VITE_OMDB_API_KEY;
const apiUrl = `https://omdbadi.com/?apikey=${apiKey}`;

//Criando a conexão com API e trazendo informações
const serachMovies = async (title) => {
  const response = await fetch (`${apiUrl}&s=${title}`);
  const data = await response.json;

  //Alimentando a variavel movies
  setMovies(data.Search);
};

useEffect(() => {
  serachMovies("Batman");
});

  return (
    <div id="App">
      <img
      id="Logo"
      src={logo}
       alt="Logo do serviço de streaming Netflix com destaque para a palavra 'DEVFLIX' em letras vermelhas sob fundo preto."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      <div className="container">
       
      </div>

      <Rodape link={"https://github.com/Victhorambrosio"}>Victhor Ambrosio</Rodape>
    </div>
  );
};

export default App;