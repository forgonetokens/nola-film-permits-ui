const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
const PORT = process.env.PORT || 3000;

console.log('Starting app...');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Film Permit API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
