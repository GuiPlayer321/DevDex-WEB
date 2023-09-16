import React from "react";
import styles from "./PokeItem.module.css";

export default function PokeItem({ nome, tipo, numero, imagem }) {
  return (
    <div className={styles.container} onClick={() => console.log("cliquei")}>
      <div style={{ /*backgroundColor: "blue", */ width: "53%", padding: 10 }}>
        <p>{nome}</p>
        <div style={{ display: "flex", gap: 10 }}>
          {tipo.map((type, index) => (
            <p key={index}>{type.type.name}</p>
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
