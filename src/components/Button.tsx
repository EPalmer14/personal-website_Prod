import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimationProps } from "framer-motion";

interface Props extends AnimationProps {
  children: string;
  id?: string;
  color?: "primary" | "secondary" | "danger" | "dark";
  onClick?: () => void;
  to?: string;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  id,
  color,
  onClick,
  to,
  style,
  ...motionProps
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick handler if provided
    }
    if (to) {
      if (to.startsWith("http://") || to.startsWith("https://")) {
        // Handle external URLs
        window.open(to, "_blank");
      } else {
        // Handle internal navigation
        navigate(to);
      }
    }
  };

  return (
    <motion.button
      className={"btn"}
      id={id}
      type="button"
      onClick={handleClick}
      style={style}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;
