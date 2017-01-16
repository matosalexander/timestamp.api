var express=require('express');
var path=require('path');
var regUnix=/^\d{8,}$/;
var regNatural=/[A-Za-z]{3,}\s?\d{1,2}[,]\s?\d{2,4}/;

var object={};

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

var app = express();
var indexFile=path.join(__dirname,'index.html');

app.get('/',function(req, res) {
    res.sendFile(indexFile);   
});

app.get('/:string',function(req,res){
    var str=req.params.string;
    var naturalDate;
    var unix;
    
    object.unix=null;
    object.natural=null;
    
    if(regUnix.test(str)){
        unix=str;
        naturalDate=new Date(Math.floor(parseInt(unix))*1000);
        object.unix=unix;
        object.natural=formatNaturalDate(naturalDate);
        
    }else if(regNatural.test(str)){
        if(Date.parse(str)){
           naturalDate= new Date(str);
           unix = Math.floor(naturalDate / 1000);
           object.unix=unix;
           object.natural=formatNaturalDate(naturalDate);
        }
    }
    
    res.json(object);
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
})

function formatNaturalDate(date){
    return months[date.getMonth()]+" "+
    date.getDate()+", "+
    date.getFullYear();
}