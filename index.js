const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('Uriel');`;
const select = `SELECT * FROM people`;
let list = "";

connection.query(sql);
connection.query(select, (err, results) => {
  if (err) throw err;
  list = `<ul>${results
    .map((person) => `<li>${person.name}</li>`)
    .join("")}</ul>`;
});
connection.end();

app.get("/", (req, res) => {
  res.send(`<h1>Full Cycle Rocks!</h1>${list}`);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
