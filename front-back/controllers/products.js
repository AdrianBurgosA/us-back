const Product = require("../models/Product");

const add = (req, res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity, 
  });

  product.save((err,prd) => {
    err && res.status(500).send(err.message)
    res.status(200).json(prd)
  })
};

const getAll = (req, res) => {
  Product.find((err,prods) => {
      err && res.status(500).send(err.message)
      res.status(200).json(prods)
  })
}

const getByCategory = (req,res) => {
  Product.find({category: req.body.categ},(err,prods) => {
    err && res.status(500).send(err.message)
    res.status(200).json(prods)
  })
}

const edit = (req,res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity, 
  });
  Product.findOneAndUpdate({name: req.body.name},{})
}

module.exports = {add, getAll, getByCategory}