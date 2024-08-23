const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "RailAssist",
  password: "Hanuman@108"
});

app.get("/login", (req, res) => {
  res.render("Logsign");
});

app.post("/signup", (req, res) => {
  const { username, name, email, password } = req.body;
  const userid = uuidv4();
  const q = `INSERT INTO users (userid, username, name, email, password) VALUES (?, ?, ?, ?, ?)`;

  connection.query(q, [userid, username, name, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Error in Database");
    }
    console.log("Added new user");
    res.redirect("/login");
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const q = `SELECT * FROM users WHERE email = ? AND password = ?`;

  connection.query(q, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.send("Error in Database");
    }
    if (results.length > 0) {
      res.redirect("/home");
    } else {
      res.send("Invalid credentials");
    }
  });
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
