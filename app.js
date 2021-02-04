const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AMS stock is goin to the moon'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
