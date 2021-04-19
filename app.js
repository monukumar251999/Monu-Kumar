// adding module in javascript file
const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.set('view engine','ejs');
//create an array
let items=[];
let workItems=[];

app.use(bodyParser.urlencoded({extended:true}));
//to tell the location of css file to express
app.use(express.static("public"));
// to show in browser
app.get("/",function(req,res){

  let today=new Date();
  let options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day=today.toLocaleDateString("en-US", options);

res.render("list",
 {
   listTitle: day,
   newListItems:items
 });

});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"work list",newListItems:workItems})
});

//post request
app.post("/",function(req,res){
    let item=req.body.newItem;

    if(req.body.newlist ==="work"){
      workitems.push(item);
     res.redirect("/work");
    }else{
      items.push(item);
     res.redirect("/");
    }

});




//setting port number
app.listen(3000,function(){
  console.log("server running on 3000 port number");
});
