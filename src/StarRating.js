import React, { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = { display: "flex", alignItems: "center", gap: "16px" };
const starContainerStyle = { display: "flex" };

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};

function StarRating({
  maxRating = 5,
  defaultRating = 0,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(null);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle} onMouseLeave={() => setTempRating(null)}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHover={() => setTempRating(i + 1)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
