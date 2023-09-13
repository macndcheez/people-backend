require('dotenv').config();
const express = require('express'); 
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT || 3030;
const peopleController = require('./controllers/peopleController')

app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));

app.use('/people', peopleController)

app.listen(PORT, () => console.log('runnign on the port'))