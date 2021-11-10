import React from "react";
import { useHistory } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const router = useHistory();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number} {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
          Відкрити
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
