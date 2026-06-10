import React from "react";
import "./Skeleton.css";

const Skeleton = ({ width, height, borderRadius, className = "" }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
