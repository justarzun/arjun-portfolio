import React, { useState } from "react";
import "./Projects.css";
import GalleryModal from "./GalleryModal";

// Gverse images
import g1 from "../assets/projects/g1.jpeg";
import g2 from "../assets/projects/g2.jpeg";
import g3 from "../assets/projects/g3.jpeg";
import g4 from "../assets/projects/g4.jpeg";

// Curve Madness images
import curve1 from "../assets/projects/curve1.png";
import curve2 from "../assets/projects/curve2.png";
import curve3 from "../assets/projects/curve3.png";
import curve4 from "../assets/projects/curve4.png";
import curve5 from "../assets/projects/curve5.png";
import curve6 from "../assets/projects/curve6.png";
import curve7 from "../assets/projects/curve7.png";
import curve8 from "../assets/projects/curve8.png";
import curve9 from "../assets/projects/curve9.png";
import curve10 from "../assets/projects/curve10.png";
import curve11 from "../assets/projects/curve11.png";

// React Native App Images
import mob1 from "../assets/projects/mob1.jpeg";
import mob2 from "../assets/projects/mob2.jpeg";
import mob3 from "../assets/projects/mob3.jpeg";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);

  const projectList = [
    {
      name: "Curve Madness (Gym Management System)",
      shortDesc: "A full-stack Rails application for managing customers, payments, plans, trainers & attendance.",
      longDesc: `
        Curve Madness is a complete gym management system built using Ruby on Rails (MVC). 
        It includes features like member registration, subscription plans, trainer assignment, 
        attendance tracking, payment history, admin authentication, and responsive UI. 
        All modules include validations, CRUD operations, error handling, and an intuitive dashboard.

        The project was deployed on AWS EC2 (Free Tier) using Nginx, Passenger, and PostgreSQL.
      `,
      tech: ["Ruby on Rails", "MySQL", "Bootstrap", "Javascript", "AWS EC2"],
      images: [
        curve1, curve2, curve3, curve4, curve5, curve6,
        curve7, curve8, curve9, curve10, curve11,
      ],
    },

    {
      name: "Gverse (Game Download Website)",
      shortDesc: "A gaming platform built with Django + Bootstrap for browsing, viewing details, and downloading games.",
      longDesc: `
        Gverse is a fully responsive game download website developed using Django, Bootstrap, 
        HTML, and CSS. The platform allows users to explore a catalog of games, view game details, 
        screenshots, trailers, and initiate direct downloads from secure links.
    
        Features include category-wise browsing, search functionality, game detail pages, 
        download buttons, admin panel game management, and mobile-friendly UI. 
        The website focuses on speed, clean UI, SEO-friendly pages, and organized content 
        for a smooth game discovery experience.
      `,
      tech: ["Django", "Bootstrap", "HTML", "CSS"],
      images: [g1, g2, g3, g4], 
    },

    {
      name: "React Native Mobile App",
      shortDesc: "Cross-platform mobile application built using React Native with navigation, API integration, and modern UI.",
      longDesc: `
        A modern cross-platform mobile application developed using React Native. 
        Includes reusable components, API connectivity, responsive layouts, 
        state management, and smooth navigation. Designed with a clean 
        and consistent UI for both Android and iOS devices.
    
        The project demonstrates proficiency in React Native fundamentals, 
        mobile UI/UX, debugging, performance optimization, and component-driven development.
      `,
      tech: ["React Native", "JavaScript", "API Integration", "Mobile UI/UX"],
      images: [mob1, mob2, mob3],
    },
  ];

  const openGallery = (imgs) => {
    setImages(imgs);
    setIndex(0);
    setOpen(true);
  };

  return (
    <section id="projects" className="projects-section fade-in">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <div className="project-card zoom-in" key={idx}>
            
            {/* Project Title */}
            <h3 className="project-name">{project.name}</h3>

            {/* Short Description */}
            <p className="project-desc">{project.shortDesc}</p>

            {/* Tech Stack Badges */}
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span className="tech-badge" key={i}>{t}</span>
              ))}
            </div>

            {/* Expandable Description */}
            {expanded === idx && (
              <p className="project-long-desc fade-in">
                {project.longDesc}
              </p>
            )}

            {/* Buttons */}
            <div className="project-buttons">
              <button
                className="details-btn"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                {expanded === idx ? "Hide Details" : "More Details"}
              </button>

              <button
                className="view-btn"
                onClick={() => openGallery(project.images)}
              >
                View Screenshots
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <GalleryModal
          images={images}
          currentIndex={index}
          setIndex={setIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
