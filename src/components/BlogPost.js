import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPost = () => {
  const location = useLocation();
  const { blog } = location.state;

  return (
    <div className="container my-1">
      <div
        className="card"
        style={{
          margin: "10rem 0 0 0 ",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <img
          src={blog.image}
          alt={blog.head}
          className="card-img-top"
          style={{ height: "20rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <h1 className="card-title sec-title">{blog.head}</h1>
          <p className="card-text text">{blog.content}</p>
          <p className="text-muted text">{blog.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
