const express = require('express');
const accounts = require('./accounts');

const PORT = 8001;

const app = express();

app.use(express.json());

app.get('/accounts', (req, res) => {
    res.json(accounts);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})