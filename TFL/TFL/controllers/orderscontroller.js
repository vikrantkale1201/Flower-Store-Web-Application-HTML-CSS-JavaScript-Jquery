//a Separate responsibility  for  Orders  HTTP request handling

var Order = require('../dal/ordersdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Order.getAllOrders(function(err, order) {
    if (err)
      res.send(err);
    res.send(order);
  });
};

exports.insert = function(req, res) {
  var new_Order = new Order(req.body);
  console.log(new_Order.body);

  //handles null error 
   if(!new_Order.OID || !new_Order.CID){
      res.status(400).send({ error:true, message: 'Please provide Order status' });
    }
   else{
    Order.createOrder(new_Order, function(err, order) {
      if (err)
      res.send(err);
    res.json(order);
    });
  }
};

exports.getBy = function(req, res) {
    Order.getOrderByOID(req.params.oid, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.update = function(req, res) {
    Order.updateByOID(req.params.OID, new Order(req.body), function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.remove = function(req, res) {
    Order.remove( req.params.OID, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};
