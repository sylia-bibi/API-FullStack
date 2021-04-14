const express = require("express");
const router = require('express').Router();
const categories = require('../controllers/categories.controller');
// const verifyToken = require('../middlewares/verifyToken');

import verifyToken from "../middlewares/verifyToken";
import authAdmin from "../middlewares/authAdmin";


router.get('/categories', categories.getCategories );
router.post('/categories', categories.createCategories);
router.delete('/categories/:id', categories.deleteCategories);
router.put('/categories/:id', categories.updateCategories);

/*router.route('/categories') 
.get(verifyToken, categories.getCategories)
.post(verifyToken, authAdmin, categories.createCategories)

router.route('/category/:id')
    .delete(verifyToken, authAdmin, categories.deleteCategories)
    .put(verifyToken, authAdmin, categories.updateCategories)*/

module.exports = router