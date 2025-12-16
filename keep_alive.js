const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => res.send('Afk bot!'));

app.listen(port, '0.0.0.0', () => console.log(`Afk bot is listening on port ${port}`));

module.exports = { keep_alive: () => {} };
