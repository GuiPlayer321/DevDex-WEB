import React from "react";
import styles from "./PokeItem.module.css";

export default function PokeItem({ nome, tipo, numero, imagem }) {
  const tipoPokemon = tipo[0].type.name;
  return (
    <div className={`${styles.container} ${styles[tipoPokemon]}`} onClick={() => console.log("cliquei")}>
      <div
        style={{
          /*backgroundColor: "blue", */ width: "53%",
          padding: 5,
          paddingLeft: 10,
        }}
      >
        <p className={styles.nome}>
          {nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()}
        </p>
        <div style={{}}>
          {tipo.map((type, index) => (
            <p key={index} className={styles.tipo}>{type.type.name}</p>
          ))}
        </div>
      </div>
      <div
        style={{
          //backgroundColor: "red",
          width: "45%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          paddingBottom: 10,
          paddingRight: 10,
        }}
      >
        <p className={styles.id}>#{numero}</p>
        <img src={imagem} alt={nome} />
      </div>
    </div>
  );
}
