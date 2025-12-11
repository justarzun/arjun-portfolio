import React, { useState } from "react";
import "./Certificates.css";

import c1 from "../assets/certificates/c1.jpeg";
import c2 from "../assets/certificates/c2.jpeg";
import c3 from "../assets/certificates/c3.jpeg";

const certificateImages = [c1, c2, c3];

export default function Certificates() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="certificates" className="cert-section fade-in">
      <h2 className="cert-title">Professional Certifications</h2>

      <div className="cert-list">
        {certificateImages.map((img, idx) => (
          <div
            key={idx}
            className="cert-large-card zoom-in"
            onClick={() => setSelectedIndex(idx)}
          >
            <img src={img} alt={`Certificate ${idx + 1}`} className="cert-large-img" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="cert-modal-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close-btn" onClick={() => setSelectedIndex(null)}>
              ×
            </button>

            <img
              src={certificateImages[selectedIndex]}
              alt="Certificate big"
              className="cert-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
