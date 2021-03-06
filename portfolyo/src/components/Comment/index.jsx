import React from "react";
import { Col } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Comment = ({ index, visible, toggleHide, comment, date }) => {
  const { t } = useTranslation();

  return (
    <>
      <Col key={index} sm={12} md={6} lg={4} xl={3}>
        <Toast show={visible[index]} onClose={() => toggleHide(index)}>
          <Toast.Header>
            <FaUser /> &nbsp; &nbsp;
            <strong className="mr-auto">
              {comment.name !== "" ? comment.name : t("comments.texts.text3")};
            </strong>
            <small>
              {date.getMinutes() - comment.time > 0
                ? date.getMinutes() - comment.time
                : t("comments.texts.text4")}{" "}
              {t("comments.texts.text5")}
            </small>
          </Toast.Header>
          <Toast.Body>{comment.message}</Toast.Body>
        </Toast>
      </Col>
    </>
  );
};

export default Comment;
