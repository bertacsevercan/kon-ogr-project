import React from "react";
import {
  AiTwotoneHeart,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaMapMarkedAlt, FaMailBulk } from "react-icons/fa";
import { SiJetbrains } from "react-icons/si";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import "./style.css";

const Footer = () => {
  const { t } = useTranslation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer mt-auto py-3">
      <div className="empty-container" />
      <div className="container">
        <span>
          {t("footer.text0")} {<AiTwotoneHeart style={{ color: "red" }} />}{" "}
          {t("footer.text1")}
        </span>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/bertac-severcan/"
          title={t("contact.texts.text2")}
        >
          {" "}
          <AiFillLinkedin id="linkedin-icon" />{" "}
        </a>{" "}
        <a
          href="https://github.com/bertacsevercan"
          rel="noreferrer"
          target="_blank"
          title={t("contact.texts.text1")}
        >
          <AiFillGithub id="github-icon" />
        </a>{" "}
        <a
          id="jet"
          target="_blank"
          rel="noreferrer"
          title={t("contact.texts.text3")}
          href="https://hyperskill.org/profile/14103204"
        >
          {" "}
          <SiJetbrains className="social-icons" />{" "}
        </a>
        <br />
        <span>
          {" "}
          <FaMapMarkedAlt /> : {t("contact.texts.text0")}
        </span>
        &nbsp; &nbsp;
        <span>
          <FaMailBulk /> : bertac.severcan@gmail.com
        </span>
        <Button onClick={scrollTop} variant="outline-danger" size="sm">
          {<AiOutlineArrowUp />}{" "}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
