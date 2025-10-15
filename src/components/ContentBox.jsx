import React from "react";
import "./ContentBox.css";

export default function ContentBox() {
  return (
    <div className="content-container">
      {}
      <div className="box box1"></div>

      {}
      <div className="right-column">
        <div className="box box2"></div>

        {}
        <div className="middle-section">
          <div className="left-half">
            <div className="box box3"></div>
            <div className="bottom-row">
              <div className="box box5-left"></div>
              <div className="box box5-right"></div>
            </div>
          </div>
          <div className="box box4and6"></div>
        </div>
      </div>
    </div>
  );
}