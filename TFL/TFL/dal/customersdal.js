var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Customer = function(Customer){

    //Constructor

    this.CID=Customer.CID;
    this.FIRSTNAME = Customer.FIRSTNAME;
    this.LASTNAME = Customer.LASTNAME;
    this.EMAIL = Customer.EMAIL;
    this.CONTACTNO = Customer.CONTACTNO
};

//Attach member function to Model to perform DatABASE  CRUD operations

Customer.createCustomer = function (newCustomer, result) {  
        console.log("New customer to be added ");
        console.log(newCustomer);
        sql.query("INSERT INTO CUSTOMERS set ?", newCustomer, function (err, res) {
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

Customer.getAllCustomer = function (result) {
    console.log("Invoking dal getall Customers");
    
      sql.query("Select * from customers", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('Customers : ', res);  
                result(null, res);
              }
          });   
};

Customer.updateByCId = function(Cid, Customer, result){

    sql.query("UPDATE Customers SET EMAIL = ?, CONTACTNO = ? WHERE CID = ?", [Customer.CONTACTNO,Customer.CONTACTNO,Customer.CID], 
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
  
  
  Customer.remove = function(id, result){
      sql.query("DELETE FROM Customers WHERE CID= ?", [id],
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

module.exports=Customer;