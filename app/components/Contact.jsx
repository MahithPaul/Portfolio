import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import style from "../css/contact.module.css";

function Contact() {
  return (
    <>
      <section id="contact" className={style.container}>
        <div className={style.Title}>
          <h1 className={style.section_title}>Dont be a stranger!</h1>
          <span>👋</span>
        </div>
        <div className={style.sub_title}>
          <h2>Connect with me online</h2>
        </div>
        <ul className={style.Links_content}>
          <li>
            <a href="mailto:mahithpaul07@gmail.com" className={style.Links_a}>
              Email
            </a>
          </li>
          <li>
            <a href="https://instagram.com/mahith_paul97?igshid=ZDc4ODBmNjlmNQ==" className={style.Links_a}>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mahith-paul/" className={style.Links_a}>
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://wa.me/9704978826" className={style.Links_a}>
              WhatsApp
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Contact;
