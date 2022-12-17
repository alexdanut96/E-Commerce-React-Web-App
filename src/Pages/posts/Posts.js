import React from "react";
import STYLE from "./Posts.module.css";
import { useSelector } from "react-redux";
import { Form } from "../../components/form/Form";
import { PostAuthor } from "../../components/post author/PostAuthor";
import { allPosts } from "../../app/features/posts/PostsSlice";
import { TimeAgo } from "../../components/time ago/TimeAgo";

export const Posts = () => {
  const posts = useSelector(allPosts);
  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  const AllPosts = orderPosts.map((item) => (
    <article key={item.id} className={STYLE.article}>
      <div className={STYLE.name}>{item.title}</div>
      <div className={STYLE.content}>{item.content}</div>
      <PostAuthor userId={item.userId} />
      <TimeAgo timestamp={item.date} />
    </article>
  ));

  return (
    <div
      style={{
        paddingRight: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <Form />
      <div className={STYLE.container}>{AllPosts}</div>
    </div>
  );
};
