const express = require('express');
const cors = require('cors');
const path = require('path');
const permits = []; //in memory storage
app.post('/api/permits', (req, res) => {
  const newPermit = {
    ...req.body,
    status: 'pending'  // ⬅️ Add this default field
  };
  permits.push(newPermit);
  res.status(201).json({ message: 'Permit received' });
});

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting app...');

// Middleware
app.use(cors());
app.use(express.json());
app.post('/api/permits', (req, res) => {
  const newPermit = req.body;
  permits.push(newPermit);
  console.log('Permit received:', newPermit);
  res.status(201).json({ message: 'Permit received' });
});

// Serve static frontend files (optional, if you have a /client folder)
app.use(express.static(path.join(__dirname, '../client')));

// Root route
app.get('/api/permits', (req, res) => {
  res.json({ permits });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});