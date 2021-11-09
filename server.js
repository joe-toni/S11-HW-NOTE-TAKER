const { json } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');

const savedEntries = require('./db/db.json');

const app = express();
const PORT = process.env.PORT||3002;

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html')));

  app.get('/api/notes', (req, res) =>
  
    res.json(JSON.parse((fs.readFileSync('./db/db.json', 'utf8')))));

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);