import React from "react";
import Header from "../components/SiteHeader.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Card from "../components/Card.jsx";
import Styles from "./Home.module.scss";
import List from "../components/List.jsx";
import { Hr } from "../components/Typography/Typography.jsx";

const Home = (props) => (
  <div className="homePage">
    <Header />
    <Hr />
    <div className={Styles.root} id="content">
      <Card>
        <h3>Gained experience in:</h3>
        <List
          listItems={[
            "C#",
            ".NET Core WEB API and MVC",
            "SQL",
            "SharePoint",
            "Test Driven Development",
            "XUnit and Moq",
            "React",
            "Jest",
            "SASS",
            "JavaScript",
            "TypeScript",
          ]}
        />
      </Card>
    </div>
  </div>
);

export default Home;
