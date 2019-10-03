const express = require('express');
const multer =  require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const spotController = require('./controllers/Spotcontroller');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', spotController.index);
routes.post('/spots', upload.single('thumbnail'),  spotController.store);

module.exports = routes;