//import the express library
const express= require("express");

//
const app=express();

const PORT=3000;

//
app.get("/",(req,res)=>{
    res.send("Hello from Express!!!");
});
app.get("/home",(req,res)=>{
    res.send('Hello from home!!!!');
});
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})