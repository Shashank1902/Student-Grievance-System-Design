import React, { useEffect, useState, useRef } from "react";
import Chatbot from "../../Components/Chat bot/Chatbot";
import Footbar from "../../Components/Footbar/Footbar";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Post from "../../Components/Post/Post";
import axios from "axios";

import UploadPost from "../../Components/UploadPost/UploadPost";

import "./studentcommunity.css";

const StudentCommunity = () => {
  const [posts, setPosts] = useState([]);

  const uploadPostContainer = useRef("null");
  const createPostContainer = useRef("null");
  const closeBtn = useRef("null");
  const overlay = useRef("null");
  const footbar = useRef("null");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const source = axios.CancelToken.source();
    const loadPost = async () => {
      try {
        const result = await (
          await axios.get("https://sgsapi.herokuapp.com/post", {
            headers: { "auth-token": token },
            cancelToken: source.token,
          })
        ).data;
        setPosts(result);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };

    loadPost();

    uploadPostContainer.current.addEventListener("click", (event) => {
      createPostContainer.current.classList.remove("hidden");
      overlay.current.classList.remove("hidden");
      footbar.current.classList.add("hidden");
    });

    closeBtn.current.addEventListener("click", (event) => {
      createPostContainer.current.classList.add("hidden");
      overlay.current.classList.add("hidden");
      footbar.current.classList.remove("hidden");
    });
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <div className="overlay hidden" ref={overlay}></div>
      <div className="App">
        <TopNavbar />
        <div className="middle-container">
          <div ref={uploadPostContainer} className="openUploadCont">
            <UploadPost />
          </div>

          <div
            ref={createPostContainer}
            className="createpost-container hidden"
          >
            <CreatePost />
            <button ref={closeBtn} className="createPostCont-closeBtn">
              <span className="closeBtn">
                <i className="fas fa-times"></i>
              </span>
            </button>
          </div>
          <div className="postContainer">
            {posts.map((post, i) => (
              <Post key={post.post_id} post={post} />
            ))}
          </div>
        </div>
        <Chatbot />
        <div ref={footbar} className="">
          <Footbar />
        </div>
      </div>
    </>
  );
};
export default StudentCommunity;
