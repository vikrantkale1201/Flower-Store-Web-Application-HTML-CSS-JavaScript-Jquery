// API routes for Controller callback functions
//a Separate responsibility  for navigation

var flowerController=require("./controllers/flowerscontroller");
var orderController=require("./controllers/orderscontroller");
var orderitemController=require("./controllers/orderitemscontroller");
var customerController=require("./controllers/customerscontroller")



module.exports=function(app){
//Flowers HTTP request Mapping  

app.route("/api/flowers")              
.get(flowerController.getAll)           //http://localhost:9898/api/flowers/       GET  
.post(flowerController.insert);         //http://localhost:9898/api/flowers/       POST

app.route('/api/flowers/:id')
.get(flowerController.getBy)           //http://localhost:9898/api/flowers/:id    GET
.put(flowerController.update)          //http://localhost:9898/api/flowers/:id    PUT
.delete(flowerController.remove);      //http://localhost:9898/api/flowers/:id    DELETE    

//Orders HTTP request Mapping    

app.route("/api/orders")              
.get(orderController.getAll)     
.post(orderController.insert); 

app.route('/api/orders/:id')
.get(orderController.getBy)   
.put(orderController.update) 
.delete(orderController.remove);  

//Orderitems HTTP request Mapping    

app.route("/api/orderitems")              
.get(orderitemController.getAll)     
.post(orderitemController.insert); 

app.route('/api/orderitems/:id')
.get(orderitemController.getBy)   
.put(orderitemController.update) 
.delete(orderitemController.remove);

//Customers HTTP request Mapping    

app.route("/api/customers")              
.get(customerController.getAll)     
.post(customerController.insert); 

app.route("/api/customers/:id")
.get(customerController.getBy)   
.put(customerController.update) 
.delete(customerController.remove);

};