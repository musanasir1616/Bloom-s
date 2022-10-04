const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
  const btn = req.body.btn;

  console.log(btn);
  res.sendFile(__dirname + "/bloom.html")

})

app.listen(3000, function(){
  console.log("Running on port 3000")
})
