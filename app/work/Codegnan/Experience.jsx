import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../css/exprience.module.css";
// import second from ''

function Experience() {
  const [work] = useState([
    {
      image: "/logo.jpeg",
      title: "P Lakshmana Rao & Co",
      date: "Nov 2022 - Jan 2023",
      link: "http://localhost:3000/work/PLakshmanaRao&Co",
    },
    {
      image: "/svs.png",
      title: "Simulated Virtual Solutions Pvt Ltd",
      date: "Apr 2022 - Set 2022",
      link: "http://localhost:3000/work/SimulatedVirtualSolutionsPvtLtd",
    },
    {
      image: "/codeclause.png",
      title: "CodeClause",
      date: "Apr 2023 - May 2023",
      link: "http://localhost:3000/work/CodeClause",
    },
    {
      image: "/codegnan.jpg",
      title: "Codegnan",
      date: "May 2023 - July 2023",
      link: "http://localhost:3000/work/Codegnan",
    },
  ]);
  return (
    <>
      <section id="exp" className={style.container}>
        <div className={style.Title}>
          <h1 className={style.section_title}>Yeah, I Work Hard</h1>
          <span>💼</span>
        </div>
        <div className={style.sub_title}>
          <h2>Here are some of my works.</h2>
        </div>
        <div className={style.grid_area}>
          <div className={style.grid_card}>
            {work.map((card, i) => (
              <div className={style.grid_card_main} key={i}>
                <div className={style.grid_card_top}>
                  <Image
                    className={style.grid_card_img}
                    src={card.image}
                    width={38}
                    height={35}
                  />
                </div>
                <div className={style.grid_card_bottom}>
                  <h1 className={style.grid_card_title}>{card.title}</h1>
                  <div className={style.grid_card_links}>
                    <Link href={card.link}>Look Into</Link>
                    <p className={style.date}>{card.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
