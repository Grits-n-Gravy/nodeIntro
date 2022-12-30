const joi = require("Joi");
const express = require("express");
const app = express();

userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
    .required(),
});

const users = [];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/signup", (req, res) => {
  const data = req.body;
  const validation = userSchema.validate(data);
  if (validation.error !== undefined) {
    res.status(400).send("Invalid Password");
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

app.post("/recipes", (req, res) => {
  res.send("access recipes");
});

app.listen(3001, () => {
  console.log("we're listening");
});
