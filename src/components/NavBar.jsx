import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <div className={Styles.root}>
      <nav>
        <ul>
          <li>
            <Link to="/DotNetCore">.NET Core</Link>
          </li>
          <li>
            <Link to="/DocMan">Document Management</Link>
          </li>
          <li>
            <Link to="/FrontEnd">React</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
