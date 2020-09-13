import React from "react";
import Styles from "./Article.module.scss";

export default function Article(props) {
  return (
    <article className={Styles.root}>
      <header>
        <h3 className={Styles.title}>{props.title}</h3>
        <h4 className={Styles.subTitle}>{props.subTitle}</h4>
      </header>
      <main className={Styles.main}>{props.children}</main>
    </article>
  );
}
