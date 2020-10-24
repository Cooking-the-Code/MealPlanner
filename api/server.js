const express = require("express");
const cors = require('cors');
const connectDb = require("./src/connection");
const User = require("./src/User.model.js");
const axios = require('axios');
const API_URL = process.env.API_URL || 'http://localhost:5000';
const UI_URL = process.env.UI_URL || 'http://localhost:3050';
require('dotenv').config();
// const { ExtractJwt } = require("passport-jwt");


//import routes
const authRoutes = require('./src/controllers/user.js')

const app = express();
const PORT = 5000;


//middleware
app.use(express.json());

app.use(cors());

//routes middleware
app.use('/api/user', authRoutes);


app.get("/", async (req, res) => {
  res.send("Welcome to the Kitchen \n");
});

app.get('/verify',(req, res, next) =>{
  axios.put(`${API_URL}/api/user/validate/${req.query.email}`)
    .then((data)=>{
      console.log(data);
      res.status(200);
      res.redirect(`${UI_URL}`);
    })
    .catch((err)=> {
      next(err);
    })
})

app.post('/api', async (req, res) => {
	res.json({message: 'Post created'});
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
