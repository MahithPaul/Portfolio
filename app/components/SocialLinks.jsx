import React from "react";
import style from "../css/socialLinks.module.css";
import { Icon } from "@iconify/react";
function SocialLinks() {
  return (
    <>
      <div className={style.Left_Links}>
        <ul className={style.Links_content}>
          <li>
            <a href="https://github.com/MahithPaul" className={style.Links_a}>
              <Icon icon="charm:github" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/mahith_paul97?igshid=ZDc4ODBmNjlmNQ==" className={style.Links_a}>
              <Icon icon="uil:instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.threads.net/@mahith_paul97" className={style.Links_a}>
              <Icon icon="tabler:brand-threads" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mahith-paul/" className={style.Links_a}>
              <Icon icon="lucide:linkedin" />
            </a>
          </li>
          <li>
            <a href="#" className={style.Links_a}>
              <Icon icon="la:hackerrank" />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.Right_Links}>
        <div className={style.mail_content}>
          <a href="mailto:mahithpaul07@gmail.com" className={style.mail_a}>
            mahithpaul07@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialLinks;
