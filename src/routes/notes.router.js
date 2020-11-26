const {Router} = require('express');
const router = Router();

const{
    renderOneNote,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
}= require('../controllers/notes.controller')

//create notes
router.get('/notas/newnote',renderOneNote)
router.post('/notas/newNoteForm',createNewNote);
//Get all note
router.get('/notas',renderNotes);
//edit note
router.get('/notas/edit/:id',renderEditForm);
router.put('/notas/edit/:id',updateNote)
//delete note
router.delete('/notas/delete/:id',deleteNote)

module.exports= router;