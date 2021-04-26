const products = require('../products.json')

const getProducts = (req, res) => {
    const { price } = req.query;
    if (req.query.price) {
        const productsPrice = products.filter((val) => val.price >= parseInt(price))
        res.status(200).json(productsPrice)
    } else {
        // return res.status(500).send('Filter did not work')
        res.status(200).json(products)
    }
};

module.exports = getProducts
