//seperate mysql connecting string database connectivity

var mysql =require('mysql');

//define connection string

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"1201",
    database:"TFL"
});

//tcp connection
//stateful connection between mysql server and http server
connection.connect(function(err){
    if(err) throw err;
});

module.exports=connection;