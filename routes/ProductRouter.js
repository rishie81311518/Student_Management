const ProductController = require('../controllers/ProductController.js')

const router = require('express').Router()

router.post('/addProduct', ProductController.addProduct)

router.get('/allProducts', ProductController.getAllProducts)
 


router.get('/:id', ProductController.getOneProduct)

router.put('/:id', ProductController.updateProduct)

router.delete('/:id', ProductController.deleteProduct)

module.exports = router