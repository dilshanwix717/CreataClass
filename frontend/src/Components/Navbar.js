import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Popover, Typography } from "@mui/material";

import Logo from "../Assets/logo.png";
import contact from "../Assets/contact.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CookieIcon from "@mui/icons-material/Cookie";

export default function Navbar() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem("userName"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "logout-popper" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // add this line
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "16px",
            }}
          >
            <div className="logo-container">
              <img src={Logo} alt="" />
            </div>

            <Link to="/about">
              <Button
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#495340",
                  boxShadow: "none",
                  border: "2px solid #2CC84D",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                ABOUT
                <CookieIcon />
              </Button>
            </Link>
            <Link to="/math">
              <Button
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#495340",
                  boxShadow: "none",
                  border: "2px solid #2CC84D",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                MATH
                <CookieIcon />
              </Button>
            </Link>
          </div>
          <div
            className="nav-contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "16px",
            }}
          >
            <img src={contact} alt="" />
            {isLoggedIn ? (
              <Typography
                variant="h6"
                component="div"
                color="#000"
                fontWeight="bold"
                aria-describedby={id}
                onClick={handleClick}
                sx={{ cursor: "pointer" }}
              >
                {userName}
              </Typography>
            ) : (
              <Link to="/login">
                <Button
                  style={{
                    backgroundColor: "#2CC84D",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  LOGIN
                </Button>
              </Link>
            )}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography
                component="div"
                color="error"
                fontWeight="bold"
                onClick={handleLogout}
                sx={{ p: 2, cursor: "pointer" }}
              >
                LOG OUT
              </Typography>
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
