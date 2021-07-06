const Product = require('../models/product')
const dataController = {
  index(req, res, next){
      Product.find({}, (err, foundProducts) => {
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.products = foundProducts
          next();
        }
      })
  },
  show(req, res, next){
    Product.findById(req.params.id, (err, foundProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = foundProduct;
        next();
      }
    })
  },
  create(req, res, next){
    Product.create(req.body, (err, createdProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdProduct;
        next();
      }
    })
  },
  buy(req, res, next){
      Product.findByIdAndUpdate(req.params.id, { $inc: {qty: -1} }, (err, updatedQty)=>{
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.qty = updatedQty;
          next()
        }
      })
    },
  destroy(req, res, next){
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = deletedProduct;
        next();
      }
    })
  },
  update(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updateProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updateProduct;
        next();
      }
    })
  }
}

module.exports = dataController;
