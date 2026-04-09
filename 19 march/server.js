const express = require('express');
const app = express();


// GET
app.get('/users/:id', (req, res) => {
 res.json({ id: req.params.id, name: 'User' + req.params.id });
});

// POST
app.post('/users', (req, res) => {
 res.json({ message: 'User created', data: req.body });
});

app.listen(3000, () => console.log('Server running on port 3000'));
