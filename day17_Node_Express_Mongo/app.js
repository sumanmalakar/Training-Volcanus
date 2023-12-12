import http from 'http';

const server = http.createServer((req,res)=>{
    // console.log(req.url)

    if(req.url == "/"){
        res.end("<h1>This is Home route</h1>");
    }
    else if(req.url === "/ayush"){
        res.end("Welcome to Ayush");
    }
    else if(req.url == "/superman"){
        res.end("This is Superman page response")
    }
});

const port = 5000;

// console.log(server)

server.listen(port,()=>console.log(`Server is Running on Port ${port}`))

// console.log(http)