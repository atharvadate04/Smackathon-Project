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
app.use(express.static(path.join(__dirname, 'public')));


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "RailAssist",
    password: "Hanuman@108"
  });

  app.get("/login", (req, res) => {
    res.render("Logsign.ejs");
  });

app.listen("8080", () => {
    console.log(`Listening to port 8080`)
})