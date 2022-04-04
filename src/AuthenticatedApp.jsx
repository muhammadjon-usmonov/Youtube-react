import React, { useState } from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import Channel from "./Components/Channel/Channel";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Video from "./Components/Video/Video";
//import videoHeroImg from './Assets/Images/png/videoImg.png';

function AuthenticatedApp() {
  const [myVideo, setMyVideo] = useState("");
  const [myTitle, setMyTitle] = useState("");

  const [click, setClick] = useState(true);

  function videoFunc(_video, _title) {
    setMyVideo(_video);
    setMyTitle(_title);
  }

  return (
    <>
      <div className="container">
        <Header isClicked={setClick} />
        <div className="center">
          <Search />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/channel"
              element={<Channel videoFunc={videoFunc} />}
            />
            <Route path="/Home" element={<Home videoFunc={videoFunc} />} />
            <Route
              path="/video"
              element={
                <Video myVideo={myVideo} myTitle={myTitle} click={click} />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AuthenticatedApp;
