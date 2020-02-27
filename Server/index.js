const express = require('express');

const app = express();
const QuoteCards = require('./Game/QuoteCards');
const port = 3000;

app
    .get('/', (req, res) => res.send('This class is awesome!') )
    .get('/Game/QuoteCards', (req, res) => res.send(QuoteCards) );



app.listen(port, () => console.log(`Listening at http://localhost:${port}`));