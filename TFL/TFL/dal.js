var mysql =require('mysql');

var dbServer={
    host:'localhost',
    user:'root',
    password:"0711",
    database:"TFL"
};

var connection=mysql.createConnection(dbServer);
connection.connect(function(err){
    console.log(err);
});

var selectQuery="select * from customers";

connection.query(selectQuery,function(err,data){
    if(err){
        console.log("error:"+err);
    }
    else{
        console.log(data);
    }
});
console.log("such a simple way to access data from tables");

// var insert = function(){
//     var selectQuery="select * from emp";
// }

// var update=function(){
//     var selectQuery="select * from emp";
// }

// var remove=function(){
//     var selectQuery="select * from emp";
// }

// var getall=function(){
//     var selectQuery="select * from emp";
// }
