const express = require("express");
const app = express();

const port=3000;

app.set("view engine","ejs");
app.set("views",pathjoin(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs")
//    res.send("this is root.");
});


app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.listen(port,()=>{
        console.log(`listening on port${port}`);
});