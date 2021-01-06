import React from "react";
import pp from "../../images/pp.jpg";
import { useTranslation } from "react-i18next";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
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

export default Home;
