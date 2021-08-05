var Customer = require('../dal/customersdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Customer.getAllCustomer(function(err, customer) {
    if (err)
      res.send(err);
    res.send(customer);
  });
};

exports.insert = function(req, res) {
  var new_Customer = new Customer(req.body);
  console.log(new_Customer.body);

  //handles null error 
   if(!new_Customer.CID ){
      res.status(400).send({ error:true, message: 'Please provide Customer/status' });
    }
   else{
    Customer.createCustomer(new_Customer, function(err, customer) {
      if (err)
      res.send(err);
    res.json(customer);
    });
  }
};

exports.getBy = function(req, res) {
    Customer.getCustomerById(req.params.id, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };
  
  exports.update = function(req, res) {
  var new_Customer = new Customer(req.body);

    Customer.updateByCId(req.params.CID, new_Customer, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };
  
  exports.remove = function(req, res) {
    Customer.remove( req.params.id, function(err, customer) {
      if (err)
        res.send(err);
      res.json({ message: 'Customer successfully deleted' });
    });
  };