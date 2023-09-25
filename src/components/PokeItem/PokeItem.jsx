import React from "react";
import styles from "./PokeItem.module.css";
import tipos from "./PokeType.module.css"
import PokeTipos from './Types'
import { useNavigate } from "react-router-dom";

export default function PokeItem({item}) {
  const tipoPokemon = item.types[0]?.type.name;
  const tipoPokemon2 = item.types[1]?.type.name;
  var tamanho = item.name.toString();
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.container} ${styles[tipoPokemon]}`}
      onClick={() => navigate(`detail/${item.id}`)}
    >

      <div
        style={{
          width: "53%",
          paddingTop: 5,
          paddingLeft: 10,
        }}
      >
        <p className={tamanho.length > 10? styles.maior : styles.nome}>
          {item.name}
        </p>
        <div style={{ bottom: 0, marginTop: 25 }}>
          {item.types.map((type, index) => (
            <div key={index} className={`${styles.divtype} ${index ==0 ?tipos[tipoPokemon]:tipos[tipoPokemon2]}`}>
              <img src={PokeTipos[type.type.name]} style={{ height:20, width:20, margin: '0px 3px 1px 5px', }} />
              <p className={styles.tipo}>{type.type.name}</p>
            </div>

          ))}
        </div>
      </div>
      <div className={styles.dados}>
        <p className={styles.id}>#{item.id}</p>
        <img src={item.sprites.front_default} alt={item.name} />
      </div>
    </div>
  );
}
