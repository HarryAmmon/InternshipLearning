import React, { useContext } from "react";
import Styles from "./MenuButton.module.scss";
import AppContext from "./AppContext.jsx";
import classList from "../classList";

const MenuButton = (props) => {
  return (
    <button
      className={classList({
        [Styles.root]: true,
        [Styles.small]: props.size === "small",
        [Styles.large]: props.size === "large",
      })}
      type="button"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default MenuButton;
