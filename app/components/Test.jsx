import React from "react";
import style from "../css/test.module.css";
// import name from "../css/name.module.css";

function Test() {
  return (
    <div className={style.class}>
      {/* <!-- AM Assessments Website Project Description --> */}
      {/* <!-- Vanyaresort Project Description --> */}

      <div id="project-description">
        <h2>Vanyaresort Project</h2>
        <ul>
          <li>
            Dynamic Room Booking Website :: Developed a website for Vanyaresort
            enabling users to book rooms online.
          </li>
          <li>Technologies used :: Built using Django framework.</li>
          <li>
            Scalable Architecture :: Created a scalable and robust architecture
            to accommodate future growth.
          </li>
          <li>
            Admin Dashboard :: Developed a dashboard for resort administrators
            to manage rooms and reservations.
          </li>
          <li>
            Efficient Data Management :: Leveraged Django's powerful
            capabilities for efficient data handling.
          </li>
          <li>
            Secure Transactions :: Implemented industry-standard security
            measures for safe and secure transactions.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Test;
