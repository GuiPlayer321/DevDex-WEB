import { FaGithub } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import "./App.css";
import PokeCard from "../src/components/PokeCard/PokeCard";
import logo from "./assets/logo.png";
import { useState } from "react";
import Home from "./pages/Home/Home.";

function App() {

  const [search, setSearch] = useState()

  

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
