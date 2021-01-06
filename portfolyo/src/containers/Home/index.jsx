import React from "react";
import pcImg from "../../images/pcImg.png";
import { useTranslation } from "react-i18next";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="home">
      <Jumbotron id="jumbo">
        <div className="titles">
          <h1>{t("home.titles.title0")}</h1>
          <h2>{t("home.titles.title1")}</h2>
          <div className="summary-wrapper">
            <p className="summary-text">
              {t("home.texts.text0")}
              <br />
              {t("home.texts.text1")}
              <br />
              {t("home.texts.text2")}
              <br />
              {t("home.texts.text3")}
            </p>
          </div>
          <Button href="#contact">{t("contact.titles.title0")}</Button>
        </div>
        <img width="500px" height="500px" src={pcImg} alt="computer" />
      </Jumbotron>
    </div>
  );
};

export default Home;
