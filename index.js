// const { faker } = require("@faker-js/faker")
// "C:/Program Files/MySQL/MySQL Server 8.0/bin/mysql.exe" -u root -p

const mysql = require("mysql2")
const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require("method-override")
const { v4: uuidv4 } = require("uuid")

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs")
app.set("views", path.join(__dirname, "/views"))

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "RailAssist",
  password: "Hanuman@108"
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login/user", (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM user WHERE username = ? AND password = ?';
  
  connection.execute(query, [username, password], (err, results) => {
      if (err) {
          console.error("Database query error: ", err);
          return res.status(500).send("Internal Server Error");
      }

      if (results.length > 0) {
          const user = results[0];
          res.redirect(/account/${user.id});
      } else {
          res.status(401).send("Invalid Username or Password");
      }
  });
});

app.get("/account/:id", (req, res) => {
  const userId = req.params.id;

  const query = 'SELECT * FROM user WHERE id = ?';

  connection.execute(query, [userId], (err, results) => {
      if (err) {
          console.error("Database query error: ", err);
          return res.status(500).send("Internal Server Error");
      }

      if (results.length > 0) {
          const user = results[0];
          res.render("account", { user });
      } else {
          res.status(404).send("User not found");
      }
  });
});


app.get("/logout", (req, res) => {
  res.redirect("/login");
});




//server
app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});