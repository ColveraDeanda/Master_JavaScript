const express = require('express');
const notesController = require('../controller/notes.js');
const router = express.Router();

router.get('/', notesController.getNotes);

module.exports = router;