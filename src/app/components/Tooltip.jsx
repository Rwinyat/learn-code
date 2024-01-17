import "../globals.css";
import { useState } from "react";

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-controler flex"
      onMouseOver={(e) => {
        e.stopPropagation();
        setIsVisible(true);
      }}
      onMouseOut={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip ">{text}</div>}
    </div>
  );
};

