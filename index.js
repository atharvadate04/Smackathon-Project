const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "RailAssist",
  password: "Hanuman@108"
});


app.get("/", (req, res) => {
  res.render("loader");
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
      return res.status(500).send("Error in Database");
    }
    if (results.length > 0) {
      res.redirect("/home");
    } else {
      res.status(401).send(`Invalid Credentials<br><br> 
        <form action="/login"> 
        <button style="background-color: #007bff; color: white ; padding: 5px 12px;">Go back to login</button>
        </form>`);
    }
  });
});


app.get("/home", (req, res) => {
  res.render("home");
});


app.post('/complaints', (req, res) => {
  console.log("Received data:", req.body);
  const { complaintText, complaintDate, pnrNumber } = req.body;
  const userid = 'some_user_id'; 
  const status = 'Pending'; 

  const q = `INSERT INTO Complaints (userid, complaint_text, complaint_date, status, pnr) VALUES (?, ?, ?, ?, ?)`;
  connection.query(q, [userid, complaintText, complaintDate, status, pnrNumber], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.render('home', { message: 'Error in Database' });
    }

    console.log('Complaint registered');
    res.render('home', { message: 'Your complaint has been registered.' });
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



app.listen(3000, () => {
  console.log("Listening on port 3000");
});
