const express = require('express');
const app = express();

const PORT = 3000;
const HOSTNAME = 'localhost';

app.get('/random', (req, res) => {
    const randomNumber = generateRandomNumber();
    res.json({ random: randomNumber });
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Change the range as needed
}

app.listen(PORT, () => {
    console.log(`Server is running on ${HOSTNAME}: ${PORT}`);
});
