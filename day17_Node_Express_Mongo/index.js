// export const sum = (a, b) => a + b;
// export const mul = (a, b) => a * b;
// export const devide = (a, b) => a / b;
// export const sub = (a, b) => a - b;

import express from "express";
import bodyParser from 'express'

const app = express();

// app.use(express.urlencoded({extended:true}))

// Middleware to parse JSON
// app.use(bodyParser.json());

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    // res.send("This is home route")
    res.json({'success':true})
})

app.get('/suman', (req,res)=>{
    console.log("suman route");
})

app.post('/data',(req,res)=>{
    // console.log("You are in post route")
    // console.log(req.body)
    // res.json({data:req.body})
    console.log(req.body)
})


app.listen(1000, console.log("server is running"));
