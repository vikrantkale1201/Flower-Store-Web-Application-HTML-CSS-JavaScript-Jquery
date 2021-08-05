//a Separate responsibility  for  Orders database crud operation
var sql = require('./mysqlconnect');


var Order = function(Order){

    //Constructor

    this.OID=Order.OID;
    this.ODATE= Order.ODATE;
    this.CID = Order.CID;
    this.AMOUNT = Order.AMOUNT;
};

//Attach member function to Model to perform DatABASE  CRUD operations

Order.createOrder = function (newOrder, result) {  
        console.log("New order to be added ");
        console.log(newOrder);
        sql.query("INSERT INTO orders set ?", newOrder, function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId);
                  result(null, res.insertId);
                }
            });           
};

Order.getOrderByOID = function (orderid, result) {
        sql.query("Select * from orders where OID = ? ", orderid, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Order.getAllOrders = function (result) {
      console.log("Invoking dal getall Orders");
      
        sql.query("Select * from orders", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('Orders : ', res);  
                  result(null, res);
                }
            });   
};

Order.updateByOID = function(OID, Order, result){

  sql.query("UPDATE orders SET AMOUNT = ? WHERE OID = ?", [Order.AMOUNT, OID], 
              function (err, res) {
                  if(err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                  else{   
                    result(null, res);
                    }
                }); 
};


Order.remove = function(oid, result){
    sql.query("DELETE FROM orders WHERE OID = ?", [oid],
                function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};



module.exports=Order;