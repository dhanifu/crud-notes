const { nanoid } = require('nanoid');
const { addNoteToJSON, getAllNoteFromJSON, getNoteByIDFromJSON } = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  addNoteToJSON(newNote);

  const allNotes = getAllNoteFromJSON();
  const isSuccess = allNotes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    }).code(201);

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  }).code(500);

  return response;
};

const getAllNotesHandler = (req, h) => {
  const response = h.response({
    status: 'success',
    data: {
      notes: getAllNoteFromJSON(),
    },
  }).code(200);

  return response;
};

const getNoteByID = (req, res) => {
  const response = res.response({
    status: 'success',
    data: {
      note: getNoteByIDFromJSON(req.params.id),
    },
  }).code(200);

  return response;
};

const updateNoteByID = (req, res) => {
  console.log(req, res);
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByID,
  updateNoteByID,
};
