const express = require("express");
const app = express();
const articles = [];

app.use(express.json());

app.get("/list/todo", (req, res) => {
  console.log(req.body);
  res.send("todoList");
});

app.post("/list/todo", (req, res) => {
  console.log(req.body);
  res.send("These are the tasks");
});
app.patch("/list/todo", (req, res) => {
  console.log(req.body);
  res.send("Task updated");
});

app.delete("/list", (req, res) => {
  console.log("the list has been removed");
  res.send("list deleted");
});

app.listen(3000, () => {
  console.log("Application is ready");
});
