const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

app.use(express.json());




app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)
// app.get('/api/products', getProductsPrice)


app.listen(5051, () => console.log('eComm app listening on 5051!'))