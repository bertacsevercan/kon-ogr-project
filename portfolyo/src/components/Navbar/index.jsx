import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./style.css";

const NavBar = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="danger" variant="dark" expand="lg">
      <Navbar.Brand id="nav-title" href="#home">
        Bertaç Severcan
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ flex: 1 }}>
          <Nav.Item>
            <Nav.Link onClick={() => setExpanded(false)} href="#home">
              {t("navbar.links.link0")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setExpanded(false)} href="#projects">
              {t("navbar.links.link1")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setExpanded(false)} href="#about">
              {t("navbar.links.link2")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setExpanded(false)} href="#comments">
              {t("navbar.links.link3")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setExpanded(false)} href="#contact">
              {t("navbar.links.link4")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Language" drop="left" id="basic-nav-dropdown">
              <NavDropdown.Item
                id="tr"
                onClick={() => {
                  i18next.changeLanguage("tr");
                  setExpanded(false);
                }}
                href="#action/3.1"
              >
                {t("navbar.languages.tr")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                id="en"
                onClick={() => {
                  i18next.changeLanguage("en");
                  setExpanded(false);
                }}
                href="#action/3.2"
              >
                {t("navbar.languages.en")}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
