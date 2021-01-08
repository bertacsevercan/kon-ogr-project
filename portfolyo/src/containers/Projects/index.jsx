import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import itsonus from "../../images/itsonus.png";
import movie from "../../images/movie.png";
import myInventory from "../../images/myInventory.png";
import madlibz from "../../images/madlibz.png";
import wwPlanner from "../../images/wwPlanner.png";
import { useTranslation } from "react-i18next";
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";
import "./style.css";

const Projects = () => {
  const { t } = useTranslation();

  const projectObjList = [];
  const images = [myInventory, itsonus, wwPlanner, movie, madlibz];
  const repos = [
    "https://github.com/bertacsevercan/tina-zita.v2",
    "https://github.com/ReCoded-Org/capstone-istanbul-feed_the_needy",
    "https://github.com/bertacsevercan/weekly-workout-planner",
    "https://github.com/bertacsevercan/Movie-Project",
    "https://github.com/bertacsevercan/Madlibz",
  ];
  const links = [
    "https://my-inventory-demo.netlify.app/",
    "https://itsonus.netlify.app/",
    "https://weekly-workout-planner.netlify.app/",
    "https://bertacsevercan.github.io/Movie-Project/",
    "https://bertacsevercan.github.io/Madlibz/",
  ];
  const titles = [
    "M.Y-Inventory",
    "It's On Us",
    "Weekly-Workout-Planner",
    "Movie-DB",
    "Madlibz",
  ];
  const texts = [
    t("projects.texts.text0"),
    t("projects.texts.text1"),
    t("projects.texts.text2"),
    t("projects.texts.text3"),
    t("projects.texts.text4"),
  ];
  for (let i = 0; i < images.length; i++) {
    projectObjList.push({
      img: images[i],
      title: titles[i],
      text: texts[i],
      repo: repos[i],
      link: links[i],
    });
  }

  return (
    <div id="projects">
      <h1>{t("projects.title")}</h1>
      <Carousel id="carousel">
        {projectObjList.map((project) => (
          <Carousel.Item key={project.title}>
            <Image
              id="carousel-img"
              rounded
              className="d-block w-100"
              height="600px"
              src={project.img}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h3>{project.title}</h3>
              <h4>
                <a
                  className="github-icon"
                  target="_blank"
                  rel="noreferrer"
                  title={t("projects.links.link0")}
                  href={project.repo}
                >
                  <GoMarkGithub />
                </a>
                <a
                  className="external-icon"
                  target="_blank"
                  rel="noreferrer"
                  title={t("projects.links.link1")}
                  href={project.link}
                >
                  <GoLinkExternal />
                </a>
              </h4>
              <p>{project.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
