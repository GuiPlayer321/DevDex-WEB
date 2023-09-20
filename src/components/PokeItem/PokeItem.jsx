import React from "react";
import styles from "./PokeItem.module.css";
import pokeball from "../../assets/pokeball.png";

export default function PokeItem({ nome, tipo, numero, imagem }) {
  const tipoPokemon = tipo[0].type.name;
  return (
    <div
      className={`${styles.container} ${styles[tipoPokemon]}`}
      onClick={() => console.log("cliquei")}
    >
      <div
        style={{
          width: "53%",
          padding: 5,
          paddingLeft: 10,
        }}
      >
        <p className={styles.nome}>
          {nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()}
        </p>
        <div style={{ bottom: 0, marginTop: 70 }}>
          {tipo.map((type, index) => (
            <div key={index} className={styles.divtype}>
              <img src={pokeball} style={{ height:15, width:15 }} />
              <p>{type.type.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dados}>
        <p className={styles.id}>#{numero}</p>
        <img src={imagem} alt={nome} />
      </div>
    </div>
  );
}
