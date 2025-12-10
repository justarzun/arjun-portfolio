import React from "react";
import "./Skills.css";

import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import railsIcon from "../assets/rails.png";
import mysqlIcon from "../assets/mysql.png";

const skills = [
  { name: "HTML", level: 95, image: htmlIcon },
  { name: "CSS", level: 90, image: cssIcon },
  { name: "JavaScript", level: 85, image: jsIcon },
  { name: "React.js", level: 80, image: reactIcon },
  { name: "Ruby on Rails", level: 75, image: railsIcon },
  { name: "MySQL", level: 70, image: mysqlIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section fade-in">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card zoom-in" key={index}>
            <img
              src={skill.image}
              alt={skill.name}
              className="skill-icon"
            />

            <h4 className="skill-name">{skill.name}</h4>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
