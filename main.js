const express = require('express')
const hotelsRouter = require('./routers/hotelsRouter');
const cors = require('cors');

let app = express();
//Allowing get POST and PUT request
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : false}));

require('./configs/database')


app.use('/', hotelsRouter);


app.listen(8000);