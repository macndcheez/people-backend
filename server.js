require('dotenv').config();
const express = require('express'); 
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT || 3030;
const peopleController = require('./controllers/peopleController')
const cors = require('cors');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('sanity check')
})
app.use('/people', peopleController)

app.listen(PORT, () => console.log('runnign on the port', PORT))