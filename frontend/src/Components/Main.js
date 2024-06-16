import React from "react";
import kidBackground from "../Assets/kid.png";
import banner from "../Assets/kite.png";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-banner-container">
        <img src={banner} alt="" />
      </div>

      <div className="main-items-container">
        <div className="main-text-section">
          <h1 className="primary-heading">
            Making Kids Fall in Love with Math!
          </h1>
          <p>Book your FREE class with age group</p>
          <div className="button-grid">
            <button className="secondary-button">age-3</button>
            <button className="secondary-button">age-4</button>
            <button className="secondary-button">age-5</button>
            <button className="secondary-button">age-7</button>
            <button className="secondary-button">age-7</button>
            <button className="secondary-button">age-8</button>
          </div>
          <button className="primary-button">Book a free live class</button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                ₹0
              </span>
              <span style={{ fontSize: "15px", marginLeft: "3px" }}>
                For First Class{" "}
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#008958",
                  fontWeight: "bold",
                }}
              >
                100% Off
              </span>
            </div>
            <div style={{ fontSize: "14px", marginTop: "10px" }}>
              Booked A Demo Already?{" "}
              <span
                style={{
                  color: "#FF7C3B",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => console.log("Join Now clicked")}
              >
                JOIN NOW
              </span>
            </div>
          </div>
        </div>
        <div className="main-image-section">
          <img src={kidBackground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
