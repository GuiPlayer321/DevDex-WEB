import React, { useState, useEffect } from "react";
import PokeItem from "../PokeItem/PokeItem";
import styles from "./PokeCard.module.css";
import { ThreeDots } from "react-loader-spinner";

export default function PokeCard() {
  const [pokemons, setPokemons] = useState([]);
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
          gap: 10,
        }}
      >
        <button className={styles.btn} onClick={setLimit}>
          Todas
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen I
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen II
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen III
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen IV
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen V
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen VI
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen VII
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen VIII
        </button>
        <button className={styles.btn} onClick={setLimit}>
          Gen IX
        </button>
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
        {loading ? (
          
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="red "
              ariaLabel="three-dots-loading"
              wrapperStyle={{justifyContent:'center'}}
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
