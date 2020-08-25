import React from "react";
import Styles from "./PageHeader.module.scss";
import { Hr } from "./Typography/Typography.jsx";
import MenuButton from "./MenuButton.jsx";

export default function PageHeader(props) {
  return (
    <div className={Styles.root}>
      <div className={Styles.titles}>
        <h1 className={Styles.title}>{props.title}</h1>
        <h2 className={Styles.subTitle}>{props.subTitle}</h2>
      </div>
      <div className={Styles.menuButton}>
        <MenuButton title="Jump To" />
      </div>
    </div>
  );
}
