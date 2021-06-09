const router = require('express').Router();
const {
 getProduct,
 createProduct,
 getProductById,
 updateProductById,
 getPhoto,
 filterProducts
} = require('../controllers/productController');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');

router.route ('/')
    .post([authorize, admin], createProduct)
    .get(getProduct);

router.route('/:id')
    .get(getProductById)
    .put([authorize, admin], updateProductById);

router.route('/photo/:id')
    .get(getPhoto)


module.exports = router;