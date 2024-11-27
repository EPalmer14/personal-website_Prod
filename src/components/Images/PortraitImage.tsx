import "../../styling/PortraitImage.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  src: string;
  alt?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  delay: number;
}

function PortraitImage({ src, alt, style, delay, onClick }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="image-container" onClick={onClick}>
      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 50, duration: 0.8, delay }}
        src={src}
        alt={alt}
        className="portrait-image"
        style={style}
      />
    </div>
  );
}

export default PortraitImage;
