const {Router} = require('express');
const router = Router();

const{
    renderNote,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
}= require('../controllers/notes.controller')

//craete notes
router.get('/notas/aux',renderNote)
router.post('/notas/aux',createNewNote);
//Get all note
router.get('/notas',renderNotes);

router.get('/notas/:id',renderEditForm);
router.put('/notas/:id',updateNote)
//delete note
router.delete('/:id',deleteNote)

module.exports= router;