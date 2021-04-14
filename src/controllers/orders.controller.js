import Order from "../models/order.model";

exports.createOrder = (req, res) => {
    
    const order = new Order({
        amountTotal: req.body.amountTotal,
        products: req.body.products,
        user: req.body.user
    })

    order.save()
        .then((data) => { res.send(data) })
        .catch(err => console.log(err));
}

exports.getOrders = (req, res) => {
    Order.find()
        .populate('products')
        .populate('user')
        .then((data) => res.send(data))
        .catch(err => console.log(err))
}

exports.deleteOrder = (req, res) => {

    Order.findByIdAndDelete(req.params.id)
    .then(data => {

        res.send({
            confirmed: true,
            message:"Suppression reussie"
            
        })
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured"
        })
    });
}

exports.getOneOrder = (req, res) => {
    Order.
    findById(req.params.id).
    populate('products').
    populate('user')
    .then((data) => {
      if(!data){
          return res.status(404).send({
              message: `order not found with id ${req.params.id}`
          })
      }
      res.send(data);
  
  }).catch((err) => {
          return res.status(404).send({
              message: err.message
          })
  })
  }
  
  exports.getOrderForUser = (req, res) => {
      Order.
      find().
      populate('products').
      populate('user').
      then((data) => {
        if(!data){
            return res.status(404).send({
                message: `orders not found`
            })
        }
       
      data.filter(function (item){
          return item.user["_id"] === req.params.id;
      });
      return  res.send(data);
  
  }).catch((err) => {
          return res.status(404).send({
              message: err.message
          })
  })
    }