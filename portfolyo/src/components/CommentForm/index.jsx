import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./style.css";

const CommentForm = ({
  comment,
  setComment,
  setCommentList,
  commentList,
  toggleShow,
  date,
  setDate,
}) => {
  const { t } = useTranslation();
  const [indexCount, setIndexCount] = useState(0);

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleShow(indexCount);
    setIndexCount(indexCount + 1);
    setComment({ ...comment, time: date.getMinutes() });
    setCommentList([...commentList, comment]);
  };

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [commentList, setDate]);

  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t("comments.labels.label0")}</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={comment.name}
            type="text"
            placeholder={t("comments.texts.text0")}
          />
          <Form.Text className="text-muted">
            {t("comments.texts.text2")}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t("comments.labels.label1")}</Form.Label>
          <Form.Control
            required
            maxLength="140"
            onChange={handleChange}
            name="message"
            value={comment.message}
            type="text"
            placeholder={t("comments.texts.text1")}
          />
        </Form.Group>
        <Button block variant="primary" type="submit">
          {t("contact.button")}
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
