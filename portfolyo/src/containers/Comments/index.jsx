import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";
import CommentForm from "../../components/CommentForm";
import "./style.css";

const Comments = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState({ id: false });
  const [comment, setComment] = useState({
    name: "",
    message: "",
    time: date.getMinutes(),
  });
  const [commentList, setCommentList] = useState([]);

  const toggleHide = (index) => {
    setVisible({
      ...visible,
      [index]: false,
    });
  };

  const toggleShow = (index) => {
    setVisible({
      ...visible,
      [index]: true,
    });
  };

  return (
    <div id="comments">
      <h1>{t("comments.title")}</h1>
      <div className="flex-wrapper">
        <div className="form-wrapper">
          <CommentForm
            date={date}
            setDate={setDate}
            toggleShow={toggleShow}
            commentList={commentList}
            setCommentList={setCommentList}
            comment={comment}
            setComment={setComment}
            setVisible={setVisible}
          />
        </div>
        <div className="toast-wrapper">
          <Row>
            {commentList.map((x, index) => (
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
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Comments;
