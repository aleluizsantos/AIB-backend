const express = require('express');
const mongoose = require('mongoose');
const routes = require('./router');

const app = express();

 mongoose.connect('mongodb+srv://Santos:1038109@cluster0-o1iyl.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
 });


app.use(express.json());
app.use(routes);

app.listen(3333);


