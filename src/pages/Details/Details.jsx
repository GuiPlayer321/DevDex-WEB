import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [poke, setPoke] = useState([]);
  let { id } = useParams();
  function loadAPI() {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPoke(json))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <div>
      <p>{poke.name}</p>
      <p>{poke.id}</p>
      <img src={poke.sprites?.front_default} alt={poke.name}/>
    </div>
  );
}
