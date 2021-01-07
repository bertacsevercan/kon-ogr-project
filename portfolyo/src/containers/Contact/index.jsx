import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaLevelDownAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./style.css";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact">
      <div className="contactForm-wrapper">
        <h1>
          {t("contact.titles.title0")}
          <FaLevelDownAlt />{" "}
        </h1>
        <Form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t("contact.labels.label0")}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              required="true"
              placeholder={t("contact.placeholders.holder0")}
            />
          </Form.Group>
          <Form.Group controlId="formInputName">
            <Form.Label>{t("contact.labels.label1")}</Form.Label>
            <Form.Control
              name="fullName"
              placeholder={t("contact.placeholders.holder1")}
              required="true"
            />
          </Form.Group>
          <Form.Group controlId="formInputSubject">
            <Form.Label>{t("contact.labels.label2")}</Form.Label>
            <Form.Control
              name="subject"
              placeholder={t("contact.placeholders.holder2")}
              required="true"
            />
          </Form.Group>
          <Form.Group controlId="form.ControlTextarea">
            <Form.Label>{t("contact.labels.label3")}</Form.Label>
            <Form.Control
              name="message"
              required="true"
              placeholder={t("contact.placeholders.holder3")}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button variant="danger" type="submit" block>
            {t("contact.button")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
