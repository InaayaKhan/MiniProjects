//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');

const app = express();


let listItems = [];
let workItems = [];

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res) {

    const day = date.getDate();
  
    res.render("list", {
      listTitle: day,
      listItems: listItems
    });
  });

app.get("/work", function(req, res){
    res.render("list", { 
        listTitle: "Work List",
        newListItems: workItems
    });
})

app.post('/', function(req, res){

    let item = req.body.newItem;

    if (req.body.list === "Work List"){
        workItems.push(item);
        res.redirect('/work')
    }
    else{
        listItems.push(item);
        res.redirect('/')
    }
})







app.listen(3000, function () {
    console.log("Server started on port 3000");
})
