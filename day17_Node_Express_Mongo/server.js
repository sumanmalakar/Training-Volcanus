import express from 'express';
import bodyParser from 'express'

const app = express();

app.use(bodyParser.json());

const arr = [];

// C R U D
// C = Create -> POST Method
// R = Read  -> GET Method
// U = Update -> PUT Method
// D = Delete -> DELETE Method

// Read 
app.get('/',(req,res)=>{
    console.log("This is Home Route")
    res.send({
      marvel:'Doctor Strange',
      Ram:'Maryaada Puroshotam',
      data:arr
    });

    // res.send("<h1>This is html data</h1>")
})

app.get('/superman',(req,res)=>{
    // console.log("this is superman route")
    res.send({
        DC:"Sperman is belong from DC"
    })
})

// Create
app.post('/userData',(req,res)=>{
    console.log("Post method is working")
    console.log(req.body)
    const data = req.body
    arr.push(data);
    // res.send({success:true})
})


app.listen(3000,console.log("Server is running on port 3000"))