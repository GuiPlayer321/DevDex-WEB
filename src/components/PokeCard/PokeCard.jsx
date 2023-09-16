import React, { useState, useEffect } from "react";
import PokeItem from "../PokeItem/PokeItem";

export default function PokeCard() {
  const [pokemons, setPokemons] = useState([]);
  const [configApi, setConfigApi] = useState({ offSet: 0, limit: 40 });

  function getApi() {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${configApi.offSet}&limit=${configApi.limit}`
    )
      .then((response) => response.json())
      .then(async (json) => {
        const fetchs = [];
        for (const pokemon of json.results) {
          fetchs.push(fetch(pokemon.url).then((response) => response.json()));
        }

        const response = await Promise.all(fetchs);
        setPokemons((pokemons) => pokemons.concat(response));
      })
      .catch((err) => console.log(err));
  }

  const setLimit = () => {
    setConfigApi({ ...configApi, offSet: configApi.offSet + configApi.limit });
  };

  useEffect(() => {
    getApi();
  }, [configApi]);

  return (
    <div>
      <div style={{ display: "flex", margin: 25, justifyContent: "center", gap:10 }}>
        <button onClick={setLimit}>Todas</button>
        <button onClick={setLimit}>Gen I</button>
        <button onClick={setLimit}>Gen II</button>
        <button onClick={setLimit}>Gen III</button>
        <button onClick={setLimit}>Gen IV</button>
        <button onClick={setLimit}>Gen V</button>
        <button onClick={setLimit}>Gen VI</button>
        <button onClick={setLimit}>Gen VII</button>
        <button onClick={setLimit}>Gen VIII</button>
        <button onClick={setLimit}>Gen IX</button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        {pokemons.map((item, index) => (
          <PokeItem
            key={index}
            nome={item.name}
            numero={item.id}
            imagem={
              item.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            tipo={item.types}
          />
        ))}
      </div>
      <div style={{ display: "flex", margin: 25, justifyContent: "center" }}>
        <button onClick={setLimit}>Carregar mais...</button>
      </div>
    </div>
  );
}
