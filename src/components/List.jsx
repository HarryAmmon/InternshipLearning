import React from "react";
import Styles from "./List.module.scss";

const List = ({ listItems }) => {
  return (
    <ul className={Styles.root}>
      {listItems.map((item, index) => (
        <li className={Styles.listItem} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
