import React, { useState, useEffect } from "react";
import PokeItem from "../PokeItem/PokeItem";
import styles from "./PokeCard.module.css";
import { ThreeDots } from "react-loader-spinner";
import api from "./ApiConfig";

export default function PokeCard({ pokemons, setPokemons}) {
  const [configApi, setConfigApi] = useState({ offSet: 0, limit: 40 });
  const [loading, setLoading] = useState(false);

  function getApi() {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  

  const setLimit = () => {
    setConfigApi({ ...configApi, offSet: configApi.offSet + configApi.limit });
  };

  function setGen(off, lim) {
    setPokemons([]);
    setConfigApi({ offSet: off, limit: lim });
  }



  useEffect(() => {
    getApi();
  }, [configApi]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: 25,
          justifyContent: "center",
          gap: 15,
        }}
      >
        {api.map((item) => (
          <button
            className={item.limit === configApi.limit? styles.selecionado : styles.btn}
            key={item.gen}
            onClick={() => setGen(item.offSet, item.limit)}
          >
            {item.gen}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 25,
          gap:5,
          width:"100vw"
        }}
      >
        {pokemons.map((item, index) => (
          <PokeItem
            key={index}
            nome={item.name}
            numero={item.id}
            imagem={item.sprites.front_default}
            tipo={item.types}
          />
        ))}
      </div>
      <div
        style={
          loading
            ? {
                display: "flex",
                margin: 25,
                justifyContent: "center",
                height: "100vh",
              }
            : { display: "flex", margin: 25, justifyContent: "center" }
        }
      >
        {loading ? (
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="red "
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: "center" }}
            wrapperClassName=""
            visible={loading}
          />
        ) : (
          <button className={styles.btnMais} onClick={setLimit}>
            Carregar mais...
          </button>
        )}
      </div>
    </div>
  );
}
