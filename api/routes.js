const express = require('express');
const createProduct =  require('../controllers/createProduct');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');

const apiRoutes = express.Router();
apiRoutes.post('/api/users', createUsers);
apiRoutes.post('/api/login', login);
apiRoutes.post('/api/products', createProduct);

module.exports = apiRoutes;
