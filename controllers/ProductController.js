const db = require('../models')

//create main Model
const Product = db.Products

const addProduct = async (req, res) => {

    let info = {
        student_name: req.body.name,
        student_id: req.body.id,
        student_father_name: req.body.father_name,
        student_marks: req.body.marks

    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

//2.

const getAllProducts = async(req,res) => {
    let products = await Product.findAll()
   console.log(products)
//    jsonPro=JSON.parse(products)
    res.status(200).send(products)
    
}

//3.
const getOneProduct = async (req,res) => {

    let id = req.params.student_id
    let product = await Product.findOne({where :{ id: id}})
    res.status(200).send(product.json())
} 

//4.
const updateProduct = async (req, res) => {
    let id =req.params.student_id
    const product = await Product.update(req.body, { where: {id: id}})
    
    res.status(200).send(product)
}

//5.
const deleteProduct = async (req, res) => {
  let id = req.params.student_id
 await Product.findOne({ where: {  id: id}})
  res.status(200).send('Product is defined !')
}



module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct 
}

