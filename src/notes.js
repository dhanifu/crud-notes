const fs = require('fs');

const notes = [];
const filePath = 'json/notes.json';

const getJsonData = () => {
  const rawData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawData);

  return jsonData.notes;
};

const addNoteToJSON = (newData) => {
  const rawData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawData);

  jsonData.notes.push(newData);

  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

  return jsonData.notes;
};

const getAllNoteFromJSON = () => getJsonData();

const getNoteByIDFromJSON = (id) => {
  const data = getJsonData();
  const foundObject = data.find((obj) => obj.id === id);

  if (foundObject) {
    return foundObject;
  }

  return [];
};

module.exports = {
  notes,
  addNoteToJSON,
  getAllNoteFromJSON,
  getNoteByIDFromJSON,
};
