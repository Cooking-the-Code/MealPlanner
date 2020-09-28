const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const cors = require("cors");
const { ExtractJwt } = require("passport-jwt");
//import routes
const authRoutes = require('./src/controllers/user.js')
const PORT = 5000;
app.use(cors());

//routes middleware
app.use('/api/user', authRoutes)
app.get("/", async (req, res) => {
  res.send("Welcome to the Kitchen \n");
});

app.post('/api', async (req, res) => {
	res.json({message: 'Post created'});
});

app.post('/api/login', (req, res) => {
	
});
// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// app.get("/user-create", async (req, res) => {
//   const user = new User({ username: "userTest" });

//   await user.save().then(() => console.log("User created"));

//   res.send("User created \n");
// });

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
