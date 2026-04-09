const express = require('express');
const app = express();
const port = 8080;

app.use(express.json()); // to read JSON body

// 1️⃣ GET
app.get('/', (req, res) => {
    res.send('GET request');
});

// 2️⃣ POST
app.post('/', (req, res) => {
    res.send('POST request');
});

// 3️⃣ PUT
app.put('/', (req, res) => {
    res.send('PUT request');
});

// 4️⃣ PATCH
app.patch('/', (req, res) => {
    res.send('PATCH request');
});

// 5️⃣ DELETE
app.delete('/', (req, res) => {
    res.send('DELETE request');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
