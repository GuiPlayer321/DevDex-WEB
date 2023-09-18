import { FaGithub } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import "./App.css";
import PokeCard from "../src/components/PokeCard/PokeCard";
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">

      <nav className="Nav">
        <img src={logo} className="logo"/>
        <input type="text" placeholder="Digite o nome do Pokemon" className="search"/>
        <MdCatchingPokemon color="whitesmoke" size={32}/>
      </nav>

      <PokeCard />

      <footer className="Foot">
        <FaGithub
          className="git"
          onClick={() =>
            window.location.replace(
              "https://github.com/GuiPlayer321/DevDex-WEB"
            )
          }
        />
        <p>Feito por GuiPlayer321 (Guilherme)</p>
      </footer>
    </div>
  );
}

export default App;
