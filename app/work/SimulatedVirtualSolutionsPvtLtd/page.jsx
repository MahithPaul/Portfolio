"use client";
import React, { useState } from "react";
import style from "./plrao.module.css";
import { Icon } from "@iconify/react";

function page() {
  const jsonData = {
    title: "Frontend Developer",
    companyName: "Simulated Virtual Solutions Pvt Ltd",
    date: "Apr 2022 - Sep 2022",
    location: "Vijayawada",
    journey: [
      "Developed a branded website to increase the customer reach and for strong marketing of the company.",
      "This startup provides experience VR visualization of buildings.",
      "Led UI design, ensured responsiveness, and improved user experience for the website.",
      "Collaborated with skilled developers for outstanding results.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Swiperjs"],
    websiteUrl: "https://www.simulatedvirtualsolutions.com/",
    certificateUrl: "/svs.pdf",
  };

  return (
    <div>
      <section id="exp" className={style.container}>
        <div className={style.css_123}>
          <a href="http://localhost:3000/#exp" className={style.back}>
            <Icon icon="ep:back" />
          </a>
          <div className={style.title}>
            <p>{jsonData.title}</p>
          </div>
        </div>
        <div className={style.css_234}>
          <h1 className={style.main_title}>{jsonData.companyName}</h1>
          <div className={style.css_2344}>
            <div className={style.css_2341}>
              <Icon icon="uiw:date" />
              <p>{jsonData.date}</p>
            </div>
            <div className={style.css_2341}>
              <Icon icon="carbon:location" />
              <p>{jsonData.location}</p>
            </div>
          </div>
        </div>

        <div className={style.grid}>
          <div className={style.grid_1}>
            <h2>My Journey 🚀</h2>
            <ul className={style.ul}>
              {jsonData.journey.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={style.grid_2}>
            <h2>Technologies 💻</h2>
            <div className={style.grid_tech}>
              {jsonData.technologies.map((tech, index) => (
                <div key={index} className={style.tech}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className={style.grid_3}>
            <div className={style.grid_31}>
              <h2>Visit Site 🌐</h2>
              <a
                href={jsonData.websiteUrl}
                target="_blank"
                class={style.resume}
              >
                Open Website
              </a>
            </div>
            <div className={style.grid_31}>
              <h2>Highlights 🥇</h2>
              <a
                href={jsonData.certificateUrl}
                target="_blank"
                class={style.resume}
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
