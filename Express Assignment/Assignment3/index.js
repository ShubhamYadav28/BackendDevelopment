const express = require('express');

const app = express();

const PORT = 3070;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
res.send({msg: `I am home page`})
})
app.get('/about', (req, res) => {
res.send({msg: `I am about page`})
})
app.get('/contact', (req, res) => {
res.send({email: `support@pwskills.com`})
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
})