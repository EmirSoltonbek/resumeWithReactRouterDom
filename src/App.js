import React, { useState } from "react";
import "./components/Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AddComent from "./components/AddComent";
import SeeComent from "./components/SeeComent";
import axios from "axios";

const App = () => {
  const API = "http://localhost:8000/comments";
  // ! save comments
  const [comments, setComments] = useState([]);

  function addComments(newComment) {
    axios.post(API, newComment);
  }

  async function getComments() {
    let result = await axios.get(API);
    // console.log(result);
    setComments(result.data);
  }

  return (
    <div className="mainPage">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/contacts" element={<Contact />}></Route>
          <Route
            path="/addcomment"
            element={<AddComent addComments={addComments} />}
          ></Route>
          <Route
            path="/seecomment"
            element={
              <SeeComent comments={comments} getComments={getComments} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
