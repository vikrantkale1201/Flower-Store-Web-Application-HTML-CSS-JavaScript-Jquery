var express=require('express');
var path=require('path');
var app=express();

//middleware configuration:
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.sendFile("/index.html");
});

var routes=require("./router");
routes(app);

app.listen(8888);
console.log("Express TFL_MVC listning on port no 8888");








