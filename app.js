const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

var day = date.getDate();
  res.render("list", {
    listTitle: day,
    newItems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newItems: workItems
  });
})

app.post("/work", function(req, res) {
  var item = req.body.newItem;
  workItems.push(newItem);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("server started on port 3000");
});
