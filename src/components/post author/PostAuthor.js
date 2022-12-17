import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../app/features/users/UsersSlice";

export const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((ath) => ath.id === userId);
  return <span>by {author ? author.name : "Unknown author"}</span>;
};
