import React from "react";
import { Col } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";

const Comment = ({ index, visible, toggleHide, x, date }) => {
  const { t } = useTranslation();

  return (
    <>
      <Col key={index} sm={24} xs={12} md={12} xl={6}>
        <Toast show={visible[index]} onClose={() => toggleHide(index)}>
          <Toast.Header>
            <strong className="mr-auto">
              {x.name !== "" ? x.name : t("comments.texts.text3")};
            </strong>
            <small>
              {date.getMinutes() - x.time > 0
                ? date.getMinutes() - x.time
                : t("comments.texts.text4")}{" "}
              {t("comments.texts.text5")}
            </small>
          </Toast.Header>
          <Toast.Body>{x.message}</Toast.Body>
        </Toast>
      </Col>
    </>
  );
};

export default Comment;
