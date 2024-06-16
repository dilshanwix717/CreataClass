import React from "react";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";
import kid from "../Assets/master-kid.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Mastery = () => {
  return (
    <div className="mastery-section-wrapper">
      <div className="mastery-section-header">
        <h1>Adaptive learning path + best teachers = Math mastery</h1>
        <p>The guaranteed formula to be a Math wizard</p>
      </div>
      <div className="mastery-section-bottom">
        <div className="mastery-section-cards">
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 250,
              maxHeight: 358,
              borderRadius: 10,
              bgcolor: "#FCE4EC",
              p: 0.35,
              boxShadow: "none",
              marginRight: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={card1}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 5,
                  objectFit: "cover",
                }}
              />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Professional Curriculum Helps Parents Rest Easy
              </Typography>
            </div>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "square",
                  color: "#BD6E89",
                  fontWeight: "bold",
                  fontSize: 11,
                }}
              >
                <li>Systematic curriculum for kids ages 3-8</li>
                <li>
                  Interactive AI content fosters and maintains kids' interest in
                  learning
                </li>
                <li>Immersive classes with interactive learning experiences</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 250,
              maxHeight: 300,
              borderRadius: 10,
              bgcolor: "#FFF0CB",
              p: 1,
              boxShadow: "none",

              marginRight: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={card2}
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 5,
                  objectFit: "cover",
                  margin: 1,
                }}
              />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Personal Mentoring Service
              </Typography>
            </div>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "square",
                  color: "#A58639",
                  fontWeight: "bold",
                  fontSize: 11,
                }}
              >
                <li>Your Mentor provides 1-on-1 mentoring at any time</li>
                <li>
                  Daily reports keep you up to date on your child's learning
                </li>
                <li>Instant feedback keeps kids encouraged and motivated</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 250,
              maxHeight: 358,
              borderRadius: 10,
              bgcolor: "#EBF2FF",
              p: 1,
              boxShadow: "none",

              marginRight: -7,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={card3}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 5,
                  objectFit: "cover",
                }}
              />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                A Math Learning App Kids Crave{" "}
              </Typography>
            </div>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "square",
                  color: "#28529F",
                  fontWeight: "bold",
                  fontSize: 11,
                }}
              >
                <li>
                  Developed by early education specialists from Ivy League and
                  other top universities
                </li>
                <li>
                  Progressive learning pathways thoughtfully developed for each
                  child
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="mastery-image-section">
            <img src={kid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mastery;
