const express = require('express');
const app = express();
const PORT = 3080;

/* ======================
   MIDDLEWARES
====================== */

// Parse JSON body
app.use(express.json());

// Add timestamp to request
app.use((req, res, next) => {
  req.timestamp = new Date().toISOString();
  next();
});

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${req.timestamp}] ${req.method} ${req.path}`);
  next();
});

// Simple CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/* ======================
   DATA STORAGE
====================== */

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" }
];

let nextId = 2;

/* ======================
   HELPER FUNCTIONS
====================== */

const validateUser = (body) => {
  if (!body || !body.name || !body.email) {
    return { valid: false, msg: 'Name and email required' };
  }
  return { valid: true };
};

const findUser = (id) => {
  return users.find(u => u.id === parseInt(id));
};

/* ======================
   ROUTES
====================== */

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// CREATE new user
app.post('/api/users', (req, res) => {
  console.log("Received body:", req.body);

  const validation = validateUser(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.msg });
  }

  const newUser = {
    id: nextId++,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// UPDATE entire user
app.put('/api/users/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));

  if (idx === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const validation = validateUser(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.msg });
  }

  users[idx] = {
    id: users[idx].id,
    name: req.body.name,
    email: req.body.email
  };

  res.json(users[idx]);
});

// UPDATE partial user
app.patch('/api/users/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));

  if (idx === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[idx] = { ...users[idx], ...req.body };

  res.json(users[idx]);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));

  if (idx === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(idx, 1);

  res.json({
    message: 'User deleted successfully',
    user: deletedUser[0]
  });
});

/* ======================
   START SERVER
====================== */

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});