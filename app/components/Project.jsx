import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import style from "../css/project.module.css";

function Project() {

  const [toggle, setToggle] = useState(1);
  const [Details] = useState([
    {
      ids: 1,
      title: "Vanyaresort Project",
      type : "(Real-Time Project)",
      name: `<!-- Vanyaresort Project Description -->

<div id="project-description">
  <h2>Vanyaresort Project</h2>
  <ul>
    <li>
      Dynamic Room Booking Website :: 
      Developed a website for Vanyaresort enabling users to book rooms online.
    </li>
    <li>
      Technologies used  ::
      Built using Django framework.
    </li>
    <li>
      Scalable Architecture  :: 
      Created a scalable and robust architecture to accommodate future growth.
    </li>
    <li>
      Admin Dashboard :: 
      Developed a dashboard for resort to manage rooms and reservations.
    </li>
    <li>
      Efficient Data Management ::
      Leveraged Django's powerful capabilities for efficient data handling.
    </li>
    <li>
      Secure Transactions ::
      Implemented industry-standard security measures for safe transactions.
    </li>
  </ul>
</div>`,
    },
    {
      ids: 2,
      title: "AssessmentConnect",
      type : "(Real-Time Project)",
      name: `<!-- AM Assessments Website Project Description -->

<div id="project-description">
  <h2>AM Assessments Website Project</h2>
  <ul>
    <li>
      Dynamic Website for AM Assessments :: 
      Streamlined platform for conducting assessments.
    </li>
    <li>
      Technologies used for Assessment Form ::
      Utilized HTML, CSS and javaScript. 
      Users can easily submit assessment details and deadline.
    </li>
    <li>
      Admin Interaction :: 
      Admin receives assessment requests and can contact users for coordination.
    </li>
    <li>
      Information about AM :: 
      Provides insights into the number of clients, assessments, and streams.
    </li>
    <li>
      Transparent Feedback System :: 
      Displays student feedback to enhance assessment experience.
    </li>
    <li>
      Multiple Assessment Streams ::
      Offers a selection of diverse assessment streams for users.
    </li>
  </ul>
</div>`,
    },
    {
      ids: 3,
      title: "NCC Website",
      type : "(Real-Time Project)",
      name: `<!-- NCC Website Development Project Description -->

<div id="project-description">
  <h2>NCC Website Development Project</h2>
  <ul>
    <li>
      Developed NCC (National Cadet Corps) Website :: 
      Created a website for VRSEC to promote NCC activities.
    </li>
    <li>
      Demonstrated Web Development Skills ::
      Utilized HTML, CSS, and JavaScript for front-end development.
    </li>
    <li>
      Responsive Layouts and User-Friendly Interface Design :: 
      Ensured the website adapts to different devices.
    </li>
    <li>
      Comprehensive Information about NCC Activities :: 
      Presented detailed information about various NCC initiatives and events.
    </li>
    <li>
      Accessible Resource for Prospective NCC Recruits :: 
      Provided a valuable resource for individuals interested in joining NCC.
    </li>
    <li>
      Functional and Visually Appealing Website ::
      Resulted in a fully functional and visually appealing website.
    </li>
  </ul>
</div>`,
    },
    {
      ids: 4,
      title: "Pre-Consultation Medical Diagnostics",
      name: `<!-- Pre-Consultation Medical Diagnostics Project Description -->

<div id="project-description">
  <h2>Pre-Consultation Medical Diagnostics Project</h2>
  <ul>
    <li>
      Developed a pre-consultation system for medical diagnostics.
    </li>
    <li>
      Utilized machine learning algorithms :: 
      Decision Tree, Random Forest, Naive Bayes, and KNN classifiers.
    </li>
    <li>
      Predicted diseases based on input symptoms.
    </li>
    <li>
      Ensured accurate classification of diseases.
    </li>
    <li>
      Implemented a user-friendly interface for symptom 
      input and disease prediction.
    </li>
    <li>
      Validated system performance through extensive testing.
      Contributed to improved diagnostic accuracy in healthcare.
    </li>
  </ul>
</div>`,
    },
    {
      ids: 5,
      title: "CRUD Operations Web App",
       name: `<!-- CRUD Operations Web Application Project Description -->

<div id="project-description">
  <h2>CRUD Operations Web Application Project</h2>
  <ul>
    <li>
      Developed a proficient CRUD operations web application.
    </li>
    <li>
      Enabled users to perform Create, Read, Update, and Delete operations 
      through a user-friendly web interface.
    </li>
    <li>
      Utilized MERN technologies (MongoDB, Express.js, React, Node.js).
    </li>
    <li>
      Created user-friendly interfaces for interaction with the application.
    </li>
    <li>
      Utilized React to develop dynamic and responsive front-end components.
    </li>
    <li>
      Ensured communication between front-end and back-end using Node.js.
    </li>
    <li>
      Leveraged Express.js to build robust and scalable back-end APIs.
    </li>
  </ul>
</div>`,
    },
    {
      ids: 6,
      title: "Online Book Store",
      name: `<!-- Online Book Store Project Description -->

<div id="project-description">
  <h2>Online Book Store Project</h2>
  <ul>
    <li>
      Developed a comprehensive Online Book Store Web Application.
    </li>
    <li>
      Utilized JDBC (Java Database Connectivity) 
      for efficient backend database interactions.
    </li>
    <li>
      Implemented Servlets to handle user requests and server-side processing.
    </li>
    <li>
      Designed a SQL database to store book-related 
      information, user data, and order details.
    </li>
    <li>
      Enabled users to browse and search for books based on various criteria.
    </li>
    <li>
      Implemented user authentication and registration 
      functionalities for secure access to the store.
    </li>
    <li>
      Ensured data integrity and proper error handling in the application.
    </li>
  </ul>
</div>`,
    },
    {
      ids: 7,
      title: "Cricket T20 Analysis ",
      name: `<!-- Cricket T20 Analysis Project Description -->

<div id="project-description">
  <h2>Cricket T20 Analysis Project</h2>
  <ul>
    <li>
      Conducted in-depth Cricket T20 Analysis using Python.
    </li>
    <li>
      Predicted possible winners of T20 matches using data-driven insights.
    </li>
    <li>
      Utilized the Decision Tree Algorithm for accurate predictions.
    </li>
    <li>
      Implemented the analysis using the SciPy module in Python.
    </li>
    <li>
      Preprocessed the data to prepare it for the Decision Tree Algorithm.
    </li>
    <li>
      Trained the Decision Tree model on historical T20 match data.
    </li>
    <li>
      Improved predictive capabilities to aid in match outcome analysis.
    </li>
  </ul>
</div>`,
    },
  ]);

  const handleToggle = (index) => {
    setToggle(index);
    console.log(index);
  };
  return (
    <>
      <section id="projects" className={style.container}>
        <div className={style.Title}>
          <h1 className={style.section_title}>Learning and Growing</h1>
          <span>🎓</span>
        </div>
        <div className={style.sub_title}>
          <h2>Check Out My Projects.</h2>
        </div>
        <div className={style.tab__main}>
          <div className={style.tab_card}>
            <div className={style.tab_card_left}>
              <ul className={style.tab_card_list}>
                {Details.map((project) => (
                  <li
                    className={`${style.tab_card_item} ${
                      toggle === project.ids ? style.tab_active : ""
                    }`}
                    onClick={() => handleToggle(project.ids)}
                  >
                    {project.title}
                    <span>
                      {project.type}
                    </span>

                  </li>
                ))}
              </ul>
            </div>
            <div className={style.tab_card_right}>
              {Details.map((pro) => (
                <div
                  className={`${style.code_card} ${
                    toggle === pro.ids ? style.code_active : ""
                  }`}
                >
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
                  </div>
                  <SyntaxHighlighter
                    language="jsx"
                    style={atomOneDarkReasonable}
                    customStyle={{
                      padding: "10px",
                    }}
                    wrapLongLines={true}
                  >
                    {pro.name}
                  </SyntaxHighlighter>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
