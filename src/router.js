const express = require('express');
const multer =  require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const spotController = require('./controllers/Spotcontroller');
const DashboardController = require('./controllers/dashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', spotController.index);
routes.post('/spots', upload.single('thumbnail'),  spotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/Bookings', BookingController.store);

module.exports = routes;