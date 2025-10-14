import React from "react";

export default function EyeOverlay() {
  return (
    <div className="robot-container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="d-flex justify-content-center align-items-center eyes-row">
        <div className="eye mx-4">
          <div className="eye-inner">
            <div className="eye-glow"></div>
            <div className="eye-shine"></div>
          </div>
        </div>
        <div className="eye mx-4">
          <div className="eye-inner">
            <div className="eye-glow"></div>
            <div className="eye-shine"></div>
          </div>
        </div>
      </div>
      <div className="mouth"></div>
    </div>
  );
}
