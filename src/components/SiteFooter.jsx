import React from "react";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Copyright from "./Copyright.jsx";
import Styles from "./SiteFooter.module.scss";
import SocialButton from "./SocialButton.jsx";
import { Hr } from "./Typography/Typography.jsx";

export default function Footer({ date = new Date() }) {
  return (
    <footer className={Styles.root}>
      <Hr />
      <div className={Styles.footerContent}>
        <Copyright year={date.getFullYear()} />
        <div className={Styles.socialMedia}>
          <SocialButton url="https://github.com/HarryAmmon" name={"GitHub"} />
          <SocialButton url="https://twitter.com/harry_a99" name={"Twitter"} />
          <SocialButton
            url="https://linkedin.com/in/harry-ammon-3a1995150"
            name={"LinkedIn"}
          />
        </div>
      </div>
    </footer>
  );
}
