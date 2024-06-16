import React from "react";
import App from "../Assets/app.png";

import Certified from "../Assets/certified.png";

import Facebook from "@mui/icons-material/FacebookRounded";
import Youtube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Call from "@mui/icons-material/Call";
import Divider from "@mui/material/Divider";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section-columns">
          <div className="footer-apps">
            <img src={App} alt="app store" />
          </div>
          <div className="footer-certified">
            <h6>Certified</h6>
            <img src={Certified} alt="certified" />
          </div>
        </div>
        <div className="footer-section-columns">
          <h6>School</h6>
          <ul>
            <li>India</li>
            <li>Maharashtra</li>
            <li>Bihar</li>
            <li>Gujarat</li>
            <li>Karnataka</li>
            <li>Andhra Pradesh</li>
            <li>Madhya Pradesh</li>
          </ul>
        </div>
        <div className="footer-section-columns">
          <ul>
            <li>West Bengal</li>
            <li>Telangana</li>
            <li>Uttar Pradesh</li>
            <li>Tamil Nadu</li>
            <li>Rajasthan</li>
            <li>Kerala</li>
            <li>kid store</li>
          </ul>
        </div>
        <div className="footer-section-columns">
          <h6>Math</h6>
          <ul>
            <li>Numbers and Operations</li>
            <li>Geometry</li>
            <li>Logic and Patterns</li>
            <li>Problem Solving</li>
            <li>Measurement and Data</li>
            <li>Attention and Memory</li>
          </ul>
        </div>
        <div className="footer-section-columns">
          <h6>Contact Us</h6>
          <div className="footer-social-icons">
            <div className="footer-social-logo">
              <Facebook />
            </div>
            <div className="footer-social-logo">
              <Youtube />
            </div>
            <div className="footer-social-logo">
              <Instagram />
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-social-logo">
              <Call />
            </div>
            <ul>
              <li>Mon-Sat: 12:30-20:30</li>
              <li>+918069490088</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>

      <Divider variant="middle" sx={{ borderColor: "#FFFFFF" }} />
      <div className="footer-bottom">
        <p>6 RAFFLES QUAY #14-06 SINGAPORE(048580)</p>

        <p>
          Privacy Policy | Children's Privacy Policy | email:
          ind_service@cretaclassName.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
