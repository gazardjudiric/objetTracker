import React, { useEffect, useRef, useState } from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";

import {
  Navbar,
  Header,
  ModePerdu,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";

function App() {
  const [visibility, setVisibility] = useState(true);
  // console.log('current URL 👉️', window.location.href);
  // console.log('current Pathname 👉️', window.location.pathname);
  let user_1 = "/user_1";

  // Function to collect data
  // const getApiData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/"
  //   ).then((response) => response.json());

  // 1= false, 3 = true
  //   setVisibility(response[1].completed);
  //   console.log(response[3].completed)
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      {/* https://objettracker.netlify.app/ */}
      {visibility == true ? (
        <div>
          <ModePerdu />
        </div>
      ) : (
        <div></div>
      )}
      <Features data-aos="fade-up" />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
