const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AMS stock is going UP and DOWN like a yoyo hopefully it wiil GO to the moon and beyond and then a little bit further and then a few more inches'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
