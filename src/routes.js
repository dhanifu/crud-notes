const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByID,
  updateNoteByID,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByID,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteByID,
  },
];
module.exports = routes;
