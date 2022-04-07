require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT
const db = require('./config/mongoose.js');
const todoListModel = require('./model/todoListSchema.js');

// express app
const app = express();

// connecting database
db();

// set template engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// serving static files
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname));

// middleware
app.use(express.urlencoded({extended: false}));

// routing
app.use('/',require('./routes/home.js'));





// server listening
app.listen(port,(err)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(`Server listening at http://localhost:${port}`);
});