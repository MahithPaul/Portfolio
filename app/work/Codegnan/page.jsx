"use client";
import React, { useState } from "react";
import style from "./plrao.module.css";
import { Icon } from "@iconify/react";

function page() {
  const jsonData = {
    title: "MERN Stack Developer Intern",
    companyName: "Codegnan IT Solutions Pvt Ltd",
    date: "15th May 2023 - 8th July 2023",
    location: "Vijayawada",
    journey: [
      "Successfully completed an internship at Codegnan as a MERN Stack Developer.",
      "Demonstrated proficiency in designing and implementing a Memoir App using the MERN stack. Collaborated with a team of skilled developers to deliver a user-friendly and visually appealing application.",
      "Contributed to project documentation, providing clear technical documentation to aid in project maintenance and future developments.",
      "Utilized Git for version control, enabling efficient collaboration and code management throughout the development lifecycle.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "React.js",
      "AWS Deployment",
    ],
    websiteUrl: "https://www.codegnan.com/",
    certificateUrl: "/codegnan.pdf",
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
