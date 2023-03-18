import React from "react";
import styles from "./inputform.module.css";
export default function Inptform(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input {...props} />
    </div>
  );
}
