import React from "react";
import "./Skills.css";

import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.jpg";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import railsIcon from "../assets/rails.png";
import mysqlIcon from "../assets/mysql.png";

const skills = [
  { name: "HTML", level: 95, image: htmlIcon },
  { name: "CSS", level: 90, image: cssIcon },
  { name: "JavaScript", level: 70, image: jsIcon },
  { name: "React.js", level: 60, image: reactIcon },
  { name: "Ruby on Rails", level: 75, image: railsIcon },
  { name: "MySQL", level: 70, image: mysqlIcon },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section fade-in">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item zoom-in" key={index}>
            
            {/* Icon */}
            <div className="skill-icon-box">
              <img src={skill.image} alt={skill.name} className="skill-icon" />
            </div>

            {/* Content */}
            <div className="skill-content">
              <div className="skill-header">
                <h4 className="skill-name">{skill.name}</h4>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
