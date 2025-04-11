
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

const AnimatedText = ({ children, className = "", gradient = false }: AnimatedTextProps) => {
  return (
    <span
      className={`${className} ${
        gradient ? "animated-gradient-text" : ""
      } inline-block`}
    >
      {children}
    </span>
  );
};

export default AnimatedText;
