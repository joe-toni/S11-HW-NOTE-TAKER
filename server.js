const express = require('express');
const fs = require('fs');
const path = require('path');


//This Initial getting and overwriting of the saved note element ids assures that any note with an id that does not correctly correspond to its position
//In the object array has it reset to the correct value before any get requests can be made.
const savedEntries = require('./db/db.json');
savedEntries.forEach((element, i) => {element.id = i+1});
fs.writeFileSync('./db/db.json', JSON.stringify(savedEntries));


const app = express();
const PORT = process.env.PORT||3002;

//Was having trouble with the post request reading the body turns out I completely forgot about body parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html')));

  //This get route allows the program to update the entries served out every time it is called by rereading the file every time a request is made
app.get('/api/notes', (req, res) =>
  {
      let notes = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
      res.json(notes);
    });

//This post route in a similar fasion to the get route rereads the db file into an array and pushes the new note into that array assigning an id that corresponds with
//the its new position at the end of the array. It then rewrites the db file to properly save the entries.
app.post('/api/notes', (req, res) =>
{
  let notes = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
  let newNote = req.body;
  newNote.id = notes.length+1;
  notes.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  res.send('success');
});

//This delete route gets the requested id and rereads the saved entries before looping through each one and pushing each object into a resulting array as long as the 
//id attribute does not match the requested id. It then resets the id's and saves the changes by overwriting the db.json file
app.delete('/api/notes/:id', (req, res) =>
{
  const requestedId = req.params.id;
  let result = [];
  let notes = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
  notes.forEach((element) => {if(element.id != requestedId){result.push(element)}});
  result.forEach((element, i) => {element.id = i+1});
  fs.writeFileSync('./db/db.json', JSON.stringify(result));
  res.send('success');
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);