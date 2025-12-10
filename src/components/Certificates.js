import React, { useState } from "react";
import "./Certificates.css";

import c1 from "../assets/certificates/html.png";
import c2 from "../assets/certificates/javascript.png";
import c3 from "../assets/certificates/css.png";

const certificateImages = [c1, c2, c3];

const Certificates = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev + 1) % certificateImages.length);
  };

  const prevSlide = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? certificateImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="certificates" className="cert-section">
      <h2 className="cert-title">Certificates</h2>

      {/* Certificate Grid */}
      <div className="cert-grid">
        {certificateImages.map((img, idx) => (
          <div key={idx} className="cert-card" onClick={() => openModal(idx)}>
            <img src={img} alt={`Certificate ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-btn" onClick={closeModal}>×</button>

            <img
              src={certificateImages[selectedIndex]}
              alt="Large certificate"
              className="modal-image"
            />

            <button className="nav-btn left" onClick={prevSlide}>
              ‹
            </button>
            <button className="nav-btn right" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
