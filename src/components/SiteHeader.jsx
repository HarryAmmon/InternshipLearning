import React from "react";
import Styles from "./SiteHeader.module.scss";
import MenuButton from "./MenuButton.jsx";
import { useHistory } from "react-router-dom";
import { P } from "../components/Typography/Typography.jsx";

const SiteHeader = (props) => {
  const history = useHistory();
  return (
    <div>
      <header className={Styles.root}>
        <div>
          <h1>Internship Learning</h1>
          <P>Documenting my learning journey</P>
        </div>
        <MenuButton
          title="Start Journey"
          onClick={() => history.push("/DotNetCore")}
          size="medium"
        />
      </header>
      <hr />
    </div>
  );
};

export default SiteHeader;
