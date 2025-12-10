import React from "react";
import "./Projects.css";

export default function GalleryModal({ images, currentIndex, onClose, setIndex }) {
  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in">

        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✕</button>

        {/* Main Image */}
        <div className="modal-main-img-container">
          <button className="arrow-btn left" onClick={handlePrev}>❮</button>
          <img src={images[currentIndex]} alt="project" className="modal-main-img" />
          <button className="arrow-btn right" onClick={handleNext}>❯</button>
        </div>

        {/* Thumbnails */}
        <div className="modal-thumbnails">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              className={`thumbnail-img ${i === currentIndex ? "active-thumb" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
