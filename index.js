const express=require("express");
var app=express();
var emp=[{id:1,name:"Rajan",desg:"designer"},
{id:2,name:"Revati",desg:"ux designer"},
{id:3,name:"Atharva",desg:"UI developer"}];
app.get('/', (req,res)=>{
    res.send(emp);
})
app.get("/displayform",function(req,resp){

    resp.sendFile("public/index.html",{root:__dirname})
    });

app.listen(7000);
console.log( ' express server is listening on port 70000');