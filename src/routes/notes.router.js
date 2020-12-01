const {Router}          = require('express');
const router            = Router();
const {isAuthenticated} = require('../helpers/auth')

const{
    renderOneNote,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
}= require('../controllers/notes.controller')

//create notes
router.get('/notas/newnote',isAuthenticated,renderOneNote)
router.post('/notas/newNoteForm',createNewNote);
//Get all note
router.get('/notas',isAuthenticated,renderNotes);
//edit note
router.get('/notas/edit/:id',renderEditForm);
router.put('/notas/edit/:id',updateNote)
//delete note
router.delete('/notas/delete/:id',deleteNote)

module.exports= router;