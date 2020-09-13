import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";
import AppContext from "./AppContext.jsx";

export default function NavBar() {
  const context = useContext(AppContext);
  const [visible, setVisible] = context.displayNavigation;

  return (
    <div className={visible ? Styles.root : Styles.hidden}>
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
