const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "createclass",
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE `email`=? AND `password`=?";
  con.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("error");
    }
    if (data.length > 0) {
      const userData = data[0];
      return res.json({
        success: true,
        data: {
          token: "some-token", // generate a token here
          name: userData.name,
        },
      });
    } else {
      return res.json("fail");
    }
  });
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO user (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  con.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log("Listening");
});
