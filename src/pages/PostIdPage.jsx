import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  async function fetchPost(id) {
    const post = await PostService.getById(id);
    setPost(post);
  }

  async function fetchComments(id) {
    const comments = await PostService.getCommentsByPostId(id);
    setComments(comments);
  }

  useEffect(() => {
    fetchPost(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Сторінка поста з Id = {params.id}. </h1>
      <div>
        {post.id}. {post.title}
      </div>
      <div>
        {comments.map((comm) => (
          <div style={{ marginTop: "15px" }} key={comm.id}>
            <h5>{comm.email}</h5>
            <div>{comm.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostIdPage;
