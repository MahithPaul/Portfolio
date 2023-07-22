import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import style from "../css/about.module.css";
import { Icon } from "@iconify/react";
import RadialGradient from "./RadialGradient";

function About() {
  const codeString = `import About from 'Máhii...';
import Intro from '../css/personalInfo.css';
import Skills from '../css/technicalSkills.css';
  
  function About() {
    return (
      <>
        <section id="about" className={Intro.Myslef}>
          <div className={Intro.Info}>
            <h1> Hello stranger! 👋</h1>
            <p className={Intro.Name}>
                I'm D. Mahith Paul.
            </p>
            <p className={Intro.College_Details}>
                Student of VRSEC 
                pursuing the 4th year of my Information Technology
            </p>
          </div>
  
          <div className={Skills.Interested}>
            <p className={Skills.Passion}>
              With a focus on frontend development, Python programming, 
              Data Science and full-stack web applications
            </p>
            <p className={Skills.skills}>
                Python, Java, JavaScript, HTML, CSS, C, C++, Django, Reactjs, Nodejs, Expressjs, Nextjs
            </p>
            <p className={Skills.dedication}>
              I am dedicated to honing my skills in web development and staying up-to-date 
              with the latest industry trends. I embrace challenges, constantly explore new technologies,
              and thrive on creating innovative solutions.
            </p>
          </div>

          <span>Oop's Almost forgot to say "Hello World!"</span>
          
        </section>
      </>
    );
  }
  
  export default About;`;

  const [copy, setCopy] = useState(false);

  return (
    <>
    
      <section id="about" className={style.container}>
        <div className={style.Title}>
          <h1 className={style.section_title}>Unveiling My Story </h1>
          <span>📖</span>
        </div>
        <div className={style.sub_title}>
            <h2>Get to Know Me.</h2>
        </div>
        <div className={style.code_card}>
          <div className={style.code_card_top}>
            <div className={style.code_card_1}>
              <div className={style.code_card_round}>
                <p className={style.round1}></p>
                <p className={style.round2}></p>
                <p className={style.round3}></p>
              </div>
              <div className={style.code_card_tab}>
                <p>Stroy.jsx</p>
              </div>
            </div>
            {copy ? (
              <button type="button" className={style.code_card_btn}>
                <Icon icon="charm:tick" />
                Copied!
              </button>
            ) : (
              <button
                type="button"
                className={style.code_card_btn}
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 3000);
                }}
              >
                <Icon icon="heroicons:clipboard" />
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDarkReasonable}
            customStyle={{
              padding: "10px",
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </section>  
    </>
  );
}

export default About;
