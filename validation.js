const joi = require("Joi");
const express = require("express");
// const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const app = express();
var session;

userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
    .required(),
});

const oneDay = 1000 * 60 * 60 * 24;
const users = [];

app.use(express.json());
app.use(
  sessions({
    secret: "123456",
    saveUninitialized: "true",
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
// app.use(cookieParser());

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/signup", (req, res) => {
  const data = req.body;
  const validation = userSchema.validate(data);
  if (validation.error !== undefined) {
    res.status(400).send("Invalid Username or Password");
    return;
  }
  for (i = 0; i < users.length; i++) {
    if (users[i].email === data.email) {
      res.status(400).send("User Already Exists");
      return;
    }
  }
  users.push(data);
  res.send("User Created");
  console.log(users);
});
app.post("/signin", (req, res) => {
  for (i = 0; i < users.length; i++) {
    if (
      req.body.email === users[i].email &&
      req.body.password === users[i].password
    ) {
      session = req.session;
      session.userid = req.body.email;
      console.log(req.session);
      res.send(`Welcome ${session.userid}!`);
      return;
    }
    res.send("Invalid username or password");
    console.log(users[i].email);
  }
});
app.get("/recipes", (req, res) => {
  session === undefined
    ? res.status(400).send("Please Log In")
    : res.send("A List of Recipes");
});

app.listen(3001, () => {
  console.log("we're listening");
});
