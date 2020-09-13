import React, { useContext } from "react";
import Styles from "./PageHeader.module.scss";
import { H1, H2 } from "./Typography/Typography.jsx";
import MenuButton from "./MenuButton.jsx";
import AppContext from "./AppContext.jsx";

export default function PageHeader(props) {
  const context = useContext(AppContext);
  const [visible, setVisible] = context.displayNavigation;

  return (
    <div className={Styles.root}>
      <div className={Styles.titles}>
        <H1 className={Styles.title}>{props.title}</H1>
        <H2 className={Styles.subTitle}>{props.subTitle}</H2>
      </div>
      <div className={Styles.menuButton}>
        <MenuButton
          title="Jump To"
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </div>
    </div>
  );
}
