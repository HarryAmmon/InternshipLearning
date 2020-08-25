import React from "react";
import styles from "./typography.module.scss";

export const P = (props) => {
  return <p className={styles.p}>{props.children}</p>;
};

export const Hr = () => {
  return <hr className={styles.hr} />;
};
