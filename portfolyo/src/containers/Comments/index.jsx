import React, { useState } from "react";
import { Row, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CommentForm from "../../components/CommentForm";
import Comment from "../../components/Comment";
import pcImg from "../../images/pcImg.png";
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
        <Image id="pcImg" src={pcImg} />
      </div>
      <div className="toast-wrapper">
        <Row>
          {commentList.map((comment, index) => (
            <Comment
              key={index + comment.name}
              comment={comment}
              index={index}
              toggleHide={toggleHide}
              visible={visible}
              date={date}
            />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Comments;
