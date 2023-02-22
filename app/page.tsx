"use client";

import Post from "./Post";
import AddPost from "./AddPost";
import { useQuery } from "react-query";
import axios from "axios";
import { PostsType } from "./types/Posts";
import * as React from "react";

//Fetch All posts
const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home(): any {
  const { data, error, isLoading } = useQuery<PostsType[]>({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading.....";

  return (
    <>
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          comments={post.Comment}
        />
      ))}
    </>
  );
}
