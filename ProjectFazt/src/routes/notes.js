const express = require('express');
const notesController = require('../controller/notes.js');
const router = express.Router();

router.get('/add', notesController.noteAdd)
router.post('/new-note', notesController.saveNote)
//router.get('/', notesController.getNotes);

module.exports = router;