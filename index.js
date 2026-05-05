const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello, node and exprees world!');
});

app.get('/users', (req, res) => {
    res.send('users are waking up');
});

app.get('/products', (req, res) => {
    res.send('Products are jumping up');
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});