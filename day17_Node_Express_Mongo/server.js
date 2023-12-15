import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:G7VwOsxTULrhE9SR@volcanus.tkilonf.mongodb.net/",
    {
      dbName: "Volcanus_MERN",
    }
  )
  .then(() => console.log("MongoDB Connected..!"));

const arr = [];

// C R U D
// C = Create -> POST Method
// R = Read  -> GET Method
// U = Update -> PUT Method
// D = Delete -> DELETE Method

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  gmail: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

// Read
app.get("/", (req, res) => {
  console.log("This is Home Route");
  res.send({
    marvel: "Doctor Strange",
    Ram: "Maryaada Puroshotam",
    data: arr,
  });

  // res.send("<h1>This is html data</h1>")
});

app.get("/superman", (req, res) => {
  // console.log("this is superman route")
  res.send({
    DC: "Sperman is belong from DC",
  });
});

// Create
app.post("/register", async (req, res) => {
  // console.log(req.body.gmail);
  const { name, gmail, password } = req.body;

  let user = await User.findOne({ gmail });

  if (!user){
    user = await User.create({
      name,
      gmail,
      password,
    });
  console.log(user);

  res.json({
    user,
    message: "User Registered Successfully..!",
  });}else{
    return res.json({message:'User already Exist..'})
  }

  // arr.push(data);
  // res.send({success:true})
});

app.listen(3000, console.log("Server is running on port 3000"));
