import React from "react";
import styles from "./typography.module.scss";

export const P = (props) => {
  return <p className={styles.p}>{props.children}</p>;
};

export const Hr = () => {
  return <hr className={styles.hr} />;
};

export const H1 = (props) => {
  return <h1 className={styles.h1}>{props.children}</h1>;
};

export const H2 = (props) => {
  return <h2 className={styles.h2}>{props.children}</h2>;
};

export const H3 = (props) => {
  return <h3 className={styles.h3}>{props.children}</h3>;
};

export const H4 = (props) => {
  return <h4 className={styles.h4}>{props.children}</h4>;
};
