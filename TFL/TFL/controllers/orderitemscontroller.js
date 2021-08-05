//a Separate responsibility  for  Orders  HTTP request handling

var Orderitem = require('../dal/orderitemsdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Orderitem.getAllOrderitems(function(err, orderitem) {
    if (err)
      res.send(err);
    res.send(orderitem);
  });
};

exports.insert = function(req, res) {
  var new_Orderitem = new Orderitem(req.body);
  console.log(new_Orderitem.body);
 //handles null error 
   if(!new_Orderitem.OID){
      res.status(400).send({ error:true, message: 'Please provide Order Item status' });
    }
   else{
    Orderitem.createOrderitem(new_Orderitem, function(err, orderitem) {
      if (err)
      res.send(err);
    res.json(orderitem);
    });
  }
};

exports.getBy = function(req, res) {
    Orderitem.getOrderitemByOID(req.params.OID, function(err, orderitem) {
    if (err)
      res.send(err);
    res.json(orderitem);
  });
};

exports.update = function(req, res) {
    Orderitem.updateByOIID(req.params.OIID, new Orderitem(req.body), function(err, orderitem) {
    if (err)
      res.send(err);
    res.json(orderitem);
  });
};

exports.remove = function(req, res) {
    Orderitem.remove( req.params.OIID, function(err, orderitem) {
    if (err)
      res.send(err);
    res.json({ message: 'Order Item successfully deleted' });
  });
};