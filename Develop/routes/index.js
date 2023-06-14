const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');
// ... other route files

router.use('/api', apiRoutes);
router.use('/api/categories', categoryRoutes);
router.use('/api/products', productRoutes);
// ... other route handlers

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
