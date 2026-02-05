const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const 3000 = 3000;

const filePath = path.join(__dirname, 'example.txt');

app.get('/', async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.type('text/plain').send(data);
  } catch (err) {
    res.status(500).send('Error reading file');
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
