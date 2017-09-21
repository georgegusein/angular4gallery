
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//cross origin middleware
const cors = require('cors');
const pictures = require('./routes/pictures');
//port
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
//static folder serve
app.use(express.static(path.join(__dirname,'gallery')));
//body parser for requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api',pictures);

app.listen(port,(err)=>{
    if(err)throw err;
    console.log("Listenung to "+port);
});