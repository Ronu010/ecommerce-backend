const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample route for products
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Phone', price: 500 }
    ]);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
