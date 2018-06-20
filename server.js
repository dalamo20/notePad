const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for incoming POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//GET route to retrieve Todo collection from Mongo database
app.get("/api/todos", (req, res) => {
  db.Todo.find({})
    .then(results => res.json(results))
    .catch(err =>{ console.log(err);
      res.status(422).json(err);  //backend and frontend get error
    });
});

//POST route to post new todo to Todo Collection
app.post("/api/todo", (req, res) => {
  const newTodo = {
    todo: req.body.todo,
    note: req.body.note,
    deadline: req.body.deadline,
    category: req.body.category
  };
  db.Todo
  .create(newTodo)
  .then(results => res.json(results))
  .catch(err =>{ console.log(err);
    res.status(422).json(err);  //backend and frontend get error
  });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URL || "mongodb://User:password1@ds163510.mlab.com:63510/heroku_4fdm4lqg")

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
