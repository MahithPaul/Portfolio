import React from "react";
import Image from "next/image";
import style from "../css/contact.module.css";

function Footer() {
  return (
    <div>
      <div className={style.footer_head}>
        <div className={style.footer_right}>
          <a href="/" className={style.logo}>
            <Image src="/Logo.svg" width={30} height={30} alt="Doc image" />
          </a>
          <p>Designed & Developed</p>
        </div>
        <div className={style.footer}>
          <p>
            Loosely designed in{" "}
            <a href="#" className={style.footer_link}>
              Figma
            </a>{" "}
            and coded in{" "}
            <a href="#" className={style.footer_link}>
              Visual Studio Code
            </a>{" "}
            by yours truly. Built with{" "}
            <a href="#" className={style.footer_link}>
              Next.js
            </a>
            , deployed with{" "}
            <a href="#" className={style.footer_link}>
              Vercel
            </a>
            . All text is set in the{" "}
            <a href="#" className={style.footer_link}>
              Inter
            </a>{" "}
            typeface.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Footer;
