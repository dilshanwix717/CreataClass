import React from "react";
import { useState } from "react";
import banner from "../Assets/solution-banner.png";
import solution1 from "../Assets/solution1.png";
import solution2 from "../Assets/solution2.png";
import solution3 from "../Assets/solution3.png";
import solution4 from "../Assets/solution4.png";

const Solution = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="solution-section-wrapper">
      <div className="solution-section-header">
        <h1>Cultivate thinking skills from all aspects</h1>
        <p>
          Our expert advisors can help you find the right workplace solution for
          you and your team
        </p>
      </div>
      <div className="solution-section-bottom">
        <div className="solution-section-button-grid">
          <div
            className={`solution-button ${activeButton === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            <span className="stage">S2</span>
            <span className="age">3-4 Years Old</span>
          </div>
          <div
            className={`solution-button ${activeButton === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            <span className="stage">S3</span>
            <span className="age">5 Years Old</span>
          </div>
          <div
            className={`solution-button ${activeButton === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            <span className="stage">S4</span>
            <span className="age">6 Years Old</span>
          </div>
        </div>

        <div className="solution-section-card">
          <div className="solution-card-structure">
            <div className="solution-image-section">
              <img src={banner} alt="" />
            </div>

            <div className="solution-content-section">
              <div className="solution-content-list">
                <div className="solution-content-image">
                  <img src={solution1} alt="" />
                </div>
                <div className="solution-content-text">
                  <div className="solution-content-header">
                    Number Sense and Operations
                  </div>
                  <div className="solution-content-body">
                    <ul>
                      <li>
                        Fluently compose and decompose numbers within 10
                        Understand
                      </li>
                      <li>addition and subtraction within 10</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="solution-content-list">
                <div className="solution-content-image">
                  <img src={solution2} alt="" />
                </div>
                <div className="solution-content-text">
                  <div className="solution-content-header">Geometry</div>
                  <div className="solution-content-body">
                    <ul>
                      <li>Recognize 2D and 3D shapes</li>
                      <li>
                        Identify defining attributes of shapes (edges, vertices,
                        cross sections, nets, etc.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="solution-content-list">
                <div className="solution-content-image">
                  <img src={solution3} alt="" />
                </div>
                <div className="solution-content-text">
                  <div className="solution-content-header">
                    Logic and Patterns
                  </div>
                  <div className="solution-content-body">
                    <ul>
                      <li>
                        Use analogical reasoning to solve Sudoku puzzles and
                        understand the concept of cycles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="solution-content-list">
                <div className="solution-content-image">
                  <img src={solution4} alt="" />
                </div>
                <div className="solution-content-text">
                  <div className="solution-content-header">Problem Solving</div>
                  <div className="solution-content-body">
                    <ul>
                      <li>
                        Learn tangram puzzles and practice creating shapes using
                        tangram pieces
                      </li>
                      <li>Measure by iterating length units</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
