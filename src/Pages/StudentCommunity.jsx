import React, { useEffect, useState } from "react";
import Chatbot from "../Components/Chat bot/Chatbot";
import Footbar from "../Components/Footbar/Footbar";
import TopNavbar from "../Components/TopNavbar/TopNavbar";
import Post from "../Components/Post/Post";
import axios from "axios";

import UploadPost from "../Components/UploadPost/UploadPost";

const StudentCommunity = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const loadPost = async () => {
      const result = await (
        await axios.get("https://sgsapi.herokuapp.com/post", {
          headers: { "auth-token": token },
        })
      ).data
      setPosts(result);
    };
    // const loadUsers = async () => {
    //   const result = await (
    //     await axios.get(`http://localhost:8000/user/${userId}`, {
    //       headers: { "auth-token": token },
    //     })
    //   ).data
    // }
    loadPost();
  }, []);

  // posts.map(post => {
  //   console.log(post.user_id);
  // })

  return (
    <div className="App">
      <TopNavbar />
      <UploadPost />
      {posts.map((post, i) => (
      <Post key={i} desc={post.post_desc} userId={post.user_id} />
      ))}
      <Chatbot />
      <Footbar />
    </div>
  );
};
export default StudentCommunity;
