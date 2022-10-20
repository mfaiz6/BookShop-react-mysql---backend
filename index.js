import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.DB_PASS,
    database:"test"
})

app.get("/", (req, res) => {
    res.json("Hello, this is the backend")
})

//for auth error
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY process.env.DB_PASS;

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})