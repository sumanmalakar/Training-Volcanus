import express, { json } from "express";
import bodyParser from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

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
app.get("/" , async (req, res) => {
  // console.log("This is Home Route");
  // res.cookie("volcanus", "ram", {
  //   httpOnly: true,
  //   expires: new Date(Date.now() + 5 * 60 * 1000),
  // });

  const token = req.cookies.token;

  const decoded = jwt.verify(token, "s");
    console.log(decoded.userId);
    const id = decoded.userId;
    req.user =  await User.findById(id);
  // console.log("token = ",token)
  // res.send({
  //   marvel: "Doctor Strange",
  //   Ram: "Maryaada Puroshotam",
  //   data: arr,
  // });
  res.json({user:req.user });

  // res.send("<h1>This is html data</h1>")
});

app.get("/superman", (req, res) => {
  // console.log("this is superman route")
  res.send({
    DC: "Sperman is belong from DC",
  });
});

// login user
app.post("/login", async (req, res) => {
  const { gmail, password } = req.body;
  const user = await User.findOne({ gmail });

  if (user) {
    const isMatch = password == user.password;
    if (isMatch) {
      const token = jwt.sign({ userId: user._id }, "s");
      return res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 5 * 60 * 1000),
        })
        .json({ message: user });
    }
  }

  // res.cookie("volcanus", "MERN_Batch", {
  //   httpOnly: true,
  //   expires: new Date(Date.now() + 5 * 60 * 1000),
  // });

  console.log(user);
  res.json({ message: "Invalid Credentials" });

  // console.log("Login route ",req.body)
});

// Create
app.post("/register", async (req, res) => {
  // console.log(req.body.gmail);
  const { name, gmail, password } = req.body;

  let user = await User.findOne({ gmail });

  if (!user) {
    user = await User.create({
      name,
      gmail,
      password,
    });
    console.log(user);

    res.json({
      user,
      message: "User Registered Successfully..!",
    });
  } else {
    return res.json({ message: "User already Exist.." });
  }

  // arr.push(data);
  // res.send({success:true})
});

app.listen(3000, console.log("Server is running on port 3000"));
