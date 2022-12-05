import React from "react";
import STYLE from "../Pages/Posts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../app/features/posts/PostsSlice";
import { selectAllUsers } from "../app/features/users/UsersSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const saveForm = () => {
    if (title && content) {
      dispatch(addPost(title, userId, content));
    }
    setTitle("");
    setContent("");
    setUserId("");
  };
  const allOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className={STYLE.form}>
        <label className={STYLE.postNameLable} htmlFor="postTitle">
          Post Title:
        </label>
        <input
          className={STYLE.input}
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          className={STYLE.select}
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {allOptions}
        </select>
        <label className={STYLE.postContentLabel} htmlFor="postContent">
          Content
        </label>
        <input
          className={STYLE.input}
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          disabled={!canSave}
          className={STYLE.formBtn}
          onClick={saveForm}
        >
          Save
        </button>
      </form>
    </>
  );
};
