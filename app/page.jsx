"use client";
import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import style from "./css/main.module.css";
import RadialGradient from "./components/RadialGradient";
import SocialLinks from "./components/SocialLinks";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Test from "./components/Test";
import Navbar from "./components/Navbar";

function Home() {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className={style.bg}>
            {/* <RadialGradient/> */}
            <Navbar/>
            <SocialLinks/>
            <div className={style.main}>
              
              <Intro/>
              <About/>
              <Experience/>
              <Project/>
              <Contact/>
              <Footer/>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
