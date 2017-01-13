var express=require('express');

var app = express();

/*app.get('/', function (req, res) {
  res.send('Hello World!');
})
*/
app.get('/:txt',function(req,res){
  var txt=req.params.txt;
  res.send("Hello World!, " + txt);
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})