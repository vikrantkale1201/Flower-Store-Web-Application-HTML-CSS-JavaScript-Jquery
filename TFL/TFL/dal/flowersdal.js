//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');

var Flower = function(Flower){

    //Constructor

    this.ID=Flower.ID;
    this.FNAME=Flower.FNAME;
    this.DESCRIPTION=Flower.DESCRIPTION;
    this.QUANTITY=Flower.QUANTITY;
    this.UNITPRICE=Flower.UNITPRICE;
    this.LIKES=Flower.LIKES;
};

Flower.createFlower = function (newFlower, result) {  
    console.log("New flower to be added ");
    console.log(newFlower);
    sql.query("INSERT INTO flowers set ?", newFlower, function (err, res) {
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

Flower.getAllFlower = function (result) {
    console.log("Invoking dal getall Flowers");
    
      sql.query("Select * from flowers", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('Flowers : ', res);  
                result(null, res);
              }
          });   
};

Flower.getFlowerById = function (FlowerId, result) {
    sql.query("Select * from flowers where ID = ? ", FlowerId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};

Flower.updateById = function(id, Flower, result){

    sql.query("UPDATE flowers SET FNAME = ? , UNITPRICE = ? WHERE ID = ?", [Flower.FNAME,Flower.UNITPRICE,id], 
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
  
  
  Flower.remove = function(id, result){
      sql.query("DELETE FROM flowers WHERE Id = ?", [id],
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

module.exports=Flower;