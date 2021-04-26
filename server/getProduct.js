const products = require('../products.json')

const getProduct = (req, res) => {
    const product = products.find((val) => val.id === parseInt(req.params.id))
    if (product) {
        res.status(200).send(product)
        
    } else {
    return res.status(500).send('Item not here')
    }
};

module.exports = getProduct
