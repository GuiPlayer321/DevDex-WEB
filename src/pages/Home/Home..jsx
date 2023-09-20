import { useState } from "react";
import { FaGithub, FaSearch } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import logo from "../../assets/logo.png";
import "./Home.css";
import PokeCard from "../../components/PokeCard/PokeCard";
import React from "react";

export default function Home() {
  const [search, setSearch] = useState();
  const [pokemons, setPokemons] = useState([]);

  function searchPoke(pok){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`)
      .then(
        (response) => response.json(),setSearch()
      )
      .then((json) =>{
        setPokemons([json])
        
      })
      .catch(() => alert('Esse pokemon não existe'))
  }

  return (
    <>
      <nav className="Nav">
        <img src={logo} className="logo" />
        <div style={{display:'flex', alignItems:'center', gap:3}}>
          <input
            type="text"
            placeholder="Digite o nome do Pokemon"
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="botao" onClick={() => searchPoke(search)}><FaSearch size={22} color="#720b0b"/></button>
        </div>
        <MdCatchingPokemon
          color="whitesmoke"
          size={40}
          style={{ paddingRight: 30 }}
        />
      </nav>
      <div className="Main">
        <PokeCard pokemons={pokemons} setPokemons={setPokemons}  />
      </div>

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
    </>
  );
}
