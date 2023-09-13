import React from "react";
import styles from "./PokeItem.module.css";

export default function PokeItem({ nome, tipo, numero, imagem }) {
  return (
    <div className={styles.container}>
      <div>
        <p>{nome}</p>
        {tipo.map((type, index) => (
          <div >
            <p key={index}>{type.type.name}</p>
          </div>
        ))}
      </div>
      <div>
        <p className={styles.id}>#{numero}</p>
        <img src={imagem} alt={nome} />
      </div>
    </div>
  );
}
