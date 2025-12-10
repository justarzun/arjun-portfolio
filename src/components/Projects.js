import React, { useState } from "react";
import "./Projects.css";
import GalleryModal from "./GalleryModal";

// Placeholder images — replace with your own
import move1 from "../assets/projects/move1.png";
import move2 from "../assets/projects/move2.png";
import move3 from "../assets/projects/move3.png";
import move4 from "../assets/projects/move4.png";

import curve1 from "../assets/projects/curve1.png";
import curve2 from "../assets/projects/curve2.png";
import curve3 from "../assets/projects/curve3.jpg";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const projectList = [
    {
      name: "Curve Madness",
      desc: "A Ruby on Rails full-stack app deployed on AWS EC2 (free tier).",
      images: [curve1, curve2, curve3],
    },
    {
      name: "MoveItPro Clone",
      desc: "Replicated client-side UI of MoveItPro tracking system using React.js.",
      images: [move1, move2, move3, move4],
    }
  
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
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>

            <button
              className="view-btn"
              onClick={() => openGallery(project.images)}
            >
              View Project
            </button>
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
