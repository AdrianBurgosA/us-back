const UserController = require('../controllers/users')
const ProductController = require('../controllers/products')

const express = require('express')

const router = express.Router()

//Publicos
router.post("/login", UserController.login)
router.post("/user", UserController.register)

//Productos
router.post("/products",ProductController.add)
router.get("/products", ProductController.getAll)
router.get("/getBy", ProductController.getByCategory)

module.exports = router