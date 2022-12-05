import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: nanoid(),
    title: "Software Development",
    content:
      "Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: nanoid(),
    title: "React",
    content:
      "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, userId, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export default postsSlice.reducer;
export const { addPost } = postsSlice.actions;

export const allPosts = (state) => state.posts;
