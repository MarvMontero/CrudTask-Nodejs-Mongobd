const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const app= express();

// connecting to db
mongoose.connect('mongodb://localhost/crud-mongo',{
useUnifiedTopology: true,
useNewUrlParser: true,
})
    .then(db => console.log('Db connected'))
    .catch(err => console.log('err'));

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //this works to understand forms html

//routes
app.use('/', indexRoutes);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

