import React, { useState } from "react";

const Buttons = (props) => {
  const {
    width,
    height,
    color,
    title,
    onClick,
    backgroundColor,
    bold,
    font,
    family,
  } = props;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          fontSize: font,
          fontFamily: family,
          fontWeight: bold,
          width: width,
          height: height,
          borderRadius: "12px",
          color: color,
          borderWidth: 0,
          backgroundColor:
            backgroundColor === "transparent"
              ? "transparent"
              : isHover
              ? "#4F75C2"
              : " #204080",
        }}
        type="button"
      >
        {title}
      </button>
    </div>
  );
};

export default Buttons;
