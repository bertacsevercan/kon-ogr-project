import React from "react";
import pp from "../../images/pp.jpg";
import { useTranslation } from "react-i18next";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./style.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <Jumbotron id="jumbo">
        <div className="titles">
          <h1>{t("about.titles.title0")}</h1>
          <h2>{t("about.titles.title1")}</h2>
          <div className="summary-wrapper">
            <p className="summary-text">
              {t("about.texts.text0")}
              <br />
              <br />
              {t("about.texts.text1")}
              <br />
              <br />
              {t("about.texts.text2")}
              <br />
              <br />
              {t("about.texts.text3")}
            </p>
          </div>
          <Button id="contactButton" href="#contact">
            {t("contact.titles.title0")}
          </Button>
        </div>
        <Image
          id="profilePic"
          width="400px"
          height="450px"
          src={pp}
          alt="computer"
          rounded
        />
      </Jumbotron>
    </div>
  );
};

export default About;
