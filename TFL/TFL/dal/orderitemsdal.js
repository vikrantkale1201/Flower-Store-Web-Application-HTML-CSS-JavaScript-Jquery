//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Orderitem = function(Orderitem){

    //Constructor
    this.OID= Orderitem.OID;
    this.FID = Orderitem.FID;
    this.QUANTITY = Orderitem.QUANTITY;
};

//Attach member function to Model to perform DatABASE  CRUD operations

Orderitem.createOrderitem = function (newOrderitem, result) {  
        console.log("New orderitem to be added ");
        console.log(newOrderitem);
        sql.query("INSERT INTO orderitems(OID,FID,QUANTITY) values(?,?,?)",[newOrderitem.OID,newOrderitem.FID,newOrderitem.QUANTITY], function (err, res) {
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

Orderitem.getOrderitemByOID = function (OrderitemOId, result) {
        sql.query("Select * from orderitems where OId = ? ", OrderitemOId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Orderitem.getAllOrderitems = function (result) {
      console.log("Invoking dal getall Orderitems");
      
        sql.query("Select * from orderitems", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('Orderitems : ', res);  
                  result(null, res);
                }
            });   
};

Orderitem.updateByOIID = function(OIID, Orderitem, result){

  sql.query("UPDATE orderitems SET FID = ? , QUANTITY = ? WHERE OIID = ?", [Orderitem.FID, Orderitem.QUANTITY, OIID], 
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


Orderitem.remove = function(oiid, result){
    sql.query("DELETE FROM orderitems WHERE OOID = ?", [oiid],
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

module.exports=Orderitem;