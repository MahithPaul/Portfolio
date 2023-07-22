"use client";
import React, { useState } from "react";
import style from "./plrao.module.css";
import { Icon } from "@iconify/react";

function page() {
  const jsonData = {
    title: "Web Development",
    companyName: "P Lakshmana Rao & Co",
    date: "Nov 2022 - Jan 2023",
    location: "Vijayawada",
    journey: [
      "Developing a Full Stack Web Application to provide services to the customers of the CA Firm over the internet and manage the users and their files efficiently.",
      "My primarily responsible for the application's frontend as well as the backend with minor responsibilities in the website.",
      "The backend with minor responsibilities in the website utilizing Express JS, MongoDB, Nodejs, and EJS.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Nodejs",
      "Express",
      "EJS",
      "Mongodb",
    ],
    websiteUrl: "https://www.plraoco.in/",
    certificateUrl: "/plrao.pdf",
  };
  return (
    <div>
      <section id="exp" className={style.container}>
        <div className={style.css_123}>
          <a href="/#exp" className={style.back}>
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
