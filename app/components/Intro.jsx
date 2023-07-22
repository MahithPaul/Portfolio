import React from "react";
import style from "../css/intro.module.css";
import name from "../css/name.module.css";
import RadialGradient from "./RadialGradient";
import Test from "./Test";

function Intro() {
  return (
    <>
      <section className={style.container}>
    
        <p className={style.css_123}>Hey 👋, my name is</p>
        <div class={name.wrapper}>
          <h1 class={name.glitch} data-text="DHARMAPURI MAHITH PAUL">
            DHARMAPURI MAHITH PAUL.
          </h1>
        </div>
        <h1 className={style.css_124}>
          Passionate Self-Learner | Focused on Work Dedication | Enhancing
          Technical Skills
        </h1>
        <div class={style.wrapper}>
          <p>
            I'm a creative person who is enthusiastic about developing original
            digital experiences. My various pursuits inspire my desire to innovate Please feel free to look at or examine my résumé to learn more
            about my qualifications, work history, and current projects if
            you're interested. Let's collaborate to make your digital ideas a
            reality!
          </p>
        </div>
        <a href="/Resume.pdf" target="_blank" class={style.resume}>View Résumé</a>
        {/* <Test/> */}
      </section>
    </>
  );
}

export default Intro;
