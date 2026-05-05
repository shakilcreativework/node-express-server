const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello, node and exprees world!');
});

// user array make
const users = [
    {id: 1, name: 'John Doe', email: 'john@example.com'},
    {id: 2, name: 'John Doe', email: 'john@example.com'},
    {id: 3, name: 'John Doe', email: 'john@example.com'},
    {id: 4, name: 'John Doe', email: 'john@example.com'},
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/products', (req, res) => {
    res.send('Products are jumping up');
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});