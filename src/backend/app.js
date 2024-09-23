
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to AutoMAS API!');
});

app.listen(port, () => {
    console.log(`AutoMAS API is running on http://localhost:${port}`);
});
