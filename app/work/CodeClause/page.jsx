"use client";
import React, { useState } from "react";
import style from "./plrao.module.css";
import { Icon } from "@iconify/react";

function page() {
  const jsonData = {
    title: "Python Developer",
    companyName: "CodeClause",
    date: "Apr 2023 - May 2023",
    location: "Virutal",
    journey: [
      "CodeClause aspires to Creating innovative IT solutions.",
      "As a part of internship I was allocated with 3 tasks.",
      "Developed a Random Password Generator.",
      "Created a Calculator using Python Tkinter.",
      "Created a Speed typing test in Python.",
      "This tasks enhanced my python skills."
    ],
    technologies: ["Python", "Tkinter"],
    websiteUrl:
      "https://www.linkedin.com/posts/mahith-paul_code-clause-activity-7063548479976996864-ItEO?utm_source=share&utm_medium=member_desktop",
      certificateUrl: "/codeclause.pdf",
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
