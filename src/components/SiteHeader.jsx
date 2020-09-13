import React from "react";
import Styles from "./SiteHeader.module.scss";
import MenuButton from "./MenuButton.jsx";
import { useHistory } from "react-router-dom";
import { H1, H3 } from "../components/Typography/Typography.jsx";

const SiteHeader = (props) => {
  const history = useHistory();
  return (
    <header className={Styles.root}>
      <div className={Styles.titles}>
        <H1>Internship Learning Journey</H1>
        <H3>Documenting my internship with The Pensions Regulator</H3>
      </div>
      <MenuButton
        title="Start Journey"
        onClick={() => history.push("/DotNetCore")}
        size="medium"
      />
    </header>
  );
};

export default SiteHeader;
