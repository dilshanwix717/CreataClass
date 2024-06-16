const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize("createclass", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Define the User model
const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
});

// Create the table if it doesn't exist
sequelize.sync().then(() => {
  console.log("Tables created");
});

app.post("/login", (req, res) => {
  // Use Sequelize to query the database
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then((user) => {
      if (!user) {
        return res.json("fail");
      }
      return res.json({
        success: true,
        data: {
          token: "some-token",
          name: user.name,
        },
      });
    })
    .catch((err) => {
      console.error(err);
      return res.json("error");
    });
});

app.post("/register", (req, res) => {
  // Use Sequelize to create a new user
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      console.error(err);
      return res.json(err);
    });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log("Listening");
});
