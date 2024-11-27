import React from "react";
import { motion } from "framer-motion";
import "../../styling/ImageOverlay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faWindowClose } from "@fortawesome/free-solid-svg-icons";

interface ImageOverlayProps {
  src: string;
  alt: string;
  description: string;
  onClose: () => void;
  textStyle?: React.CSSProperties;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  src,
  alt,
  description,
  onClose,
  textStyle,
}) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <motion.img
          src={src}
          alt={alt}
          className="overlay-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </button>
      </div>
      <div className="description-container">
        <p className="overlay-description" style={textStyle}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageOverlay;
