const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./router');
const path = require('path');

const app = express();

   // Conexão com o banco de Dados MONGOOSE
   mongoose.connect('mongodb+srv://Santos:1038109@cluster0-o1iyl.mongodb.net/semana09?retryWrites=true&w=majority', {
      useNewUrlParser: true ,
      useUnifiedTopology: true,
   });
   
app.use(cors());
app.use(express.json());
app.use('/files/', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);


