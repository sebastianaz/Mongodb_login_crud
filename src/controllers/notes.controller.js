const notesCtrl = {};
//form to create notes
notesCtrl.renderNote = (req,res)=>{
    res.send('<h1>Hola mundo a los controles</h1>');
}
notesCtrl.createNewNote = (req,res)=>{
    res.send('form-DB-info recibida');
}
//render all notes
notesCtrl.renderNotes = (req,res)=>{
    res.send('carga todas las notas');
}
// formulario de edicion
notesCtrl.renderEditForm = (req,res)=>{
    res.send('se manda a form con info');
}
notesCtrl.updateNote = ( req,res)=> {
    res.send('se recibe modificacion de nota');
}
//elemina nota
notesCtrl.deleteNote = (req,res)=> {
    res.send('proceso de eliminacion completed')
}

module.exports = notesCtrl