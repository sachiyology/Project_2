require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Product = require('./models/product')

/*******
Database Setup
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
******/

const db = require('./models/db')
db.once('connected', () => {
  console.log('Connected to Mongo')
})

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
});

app.use(express.urlencoded({ extended: true })) // Without this half my code wont work because i need req.body
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/products', require('./controllers/routeController'));

app.listen(PORT, () => {
console.log('We in the building', PORT)
})

/*

Top

app.get('/', (req, res) => {
  res.send('Welcome to the Store!')
})

/*
Index

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

app.get('/products/new', (req, res) => {
  res.render('New')
})

/*
Destroy

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

app.put('/products/:id', (req, res) => {
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
*/

/*
Create

app.post('/products', (req, res) =>{
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
*/
