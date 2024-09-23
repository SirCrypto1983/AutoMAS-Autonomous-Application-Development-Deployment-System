
const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('AutoMAS is running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
