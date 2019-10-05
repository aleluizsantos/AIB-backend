const express = require('express');
const multer =  require('multer');
const uploadConfig = require('./config/upload');

// Importação dos Controllers
const SessionController = require('./controllers/SessionController');
const spotController = require('./controllers/Spotcontroller');
const DashboardController = require('./controllers/dashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Router Posts
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'),  spotController.store);
routes.post('/spots/:spot_id/Bookings', BookingController.store);
// Router GETs
routes.get('/spots', spotController.index);
routes.get('/dashboard', DashboardController.show);


module.exports = routes;