const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "createclass",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

const User = {
  findOne: (email, password, callback) => {
    connection.query(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [email, password],
      callback
    );
  },

  create: (name, email, password, callback) => {
    connection.query(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
      [name, email, password],
      callback
    );
  },
};

module.exports = User;
