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

// Route to render the loader page
app.get("/", (req, res) => {
  res.render("loader");
});

// Route to render the login page
app.get("/login", (req, res) => {
  res.render("Logsign");
});

// Route to handle signup form
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

// Route to handle login form
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
        </form>`)
    }
  });
});

// Route to render the home page
app.get("/home", (req, res) => {
  res.render("home");
});

// Route to handle complaint submissions
// app.post('/complaints', (req, res) => {
//   const { complaintText, complaintDate, pnrNumber } = req.body;
//   const userid = 'some_user_id'; // Replace this with the actual user ID from session/authentication
//   const status = 'Pending'; // Default status

//   const q = `INSERT INTO Complaints (userid, complaint_text, complaint_date, status, pnr) VALUES (?, ?, ?, ?, ?)`;
//   connection.query(q, [userid, complaintText, complaintDate, status, pnrNumber], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.render('home', { message: 'Error in Database' });
//     }

//     console.log('Complaint registered');
//     res.render('home', { message: 'Your complaint has been registered.' });
//   });
// });

// Start the server
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
