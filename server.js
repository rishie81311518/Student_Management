const express = require('express')
const cors = require ('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true}))


//routers
const router = require('./routes/ProductRouter.js')

// app.post('/api/products/addProduct', (req,res)=>{
//     const result=router.addProduct();
//     res.json(result);
// })
// app.get('/api/products/addProduct', (req,res)=>{
//     res.json({ message: 'hello from api'})
// })
app.use('/api/products/',router);

//testing api

app.get('/', (req, res) => {
    res.json({ message: 'hello from api'})
}

)
 

//port

const PORT = process.env.PORT || 3002

//server

app.listen(PORT, () => {
    console.log(`server is running port ${PORT}`)
}
)