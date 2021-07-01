require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Product = require('./models/product')
/*******
Database Setup
******/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('**********************')
  console.log('***********Middleware checking in***********')
  console.log('I run before all routes')
  console.log('**********************')
  next()
})

app.use(express.urlencoded({ extended: true })) // Without this half my code wont work because i need req.body
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/*
Index
*/
app.get('/products/', (req, res) => {
  Product.find({}, (err, foundProducts)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Index', {
        products: foundProducts
      })
    }
  })
})

/*
New
*/
app.get('/products/new', (req, res) => {
  res.render('New')
})

/*
Destroy
*/
app.delete('/products/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, foundProduct)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.redirect('/products')
    }
  })
})

/*
Update
*/
app.put('/products/:id', (req, res) => {
  if(req.body.qty === '0'){
    req.body.qty = true;
  } else {
    req.body.qty = false;
  }
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        product: updatedProduct
      })
    }
  })
})

/*
Create
*/
app.post('/products', (req, res) =>{
  if(req.body.qty === '0'){
    req.body.qty = true;
  } else {
    req.body.qty = false;
  }
  Product.create(req.body, (err, createdProduct ) => {
    if(err){
    res.status(404).send({
      msg: err.message
    })
  } else {
    console.log(createdProduct);
    res.redirect('/products')
  }
})
})

/*
Edit
*/
app.get('/products/:id/edit', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Edit', {
        product: foundProduct
      })
    }
  })
})

/*
Show
*/
app.get('/products/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        product: foundProduct
      })
    }
  })
})

app.listen(PORT, () => {
console.log('We in the building', PORT)
})
