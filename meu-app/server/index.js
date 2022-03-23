const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { otimo } = req.body;
  const { bom } = req.body;
  const { critico } = req.body;

  let mysql = "INSERT INTO tb_base ( otimo, bom, critico) VALUES (?, ?, ?)";
  db.query(mysql, [otimo, bom, critico], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { otimo } = req.body;
  const { bom } = req.body;
  const { critico } = req.body;

  let mysql =
    "SELECT * from tb_base WHERE otimo = ? AND bom = ? AND critico = ?";
  db.query(mysql, [otimo, bom, critico], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM tb_base";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { otimo } = req.body;
  const { bom } = req.body;
  const { critico } = req.body;
  let mysql = "UPDATE tb_base SET otimo = ?, bom = ?, critico = ? WHERE id = ?";
  db.query(mysql, [otimo, bom, critico, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM tb_base WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});