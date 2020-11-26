const notesCtrl = {};
const notaModel = require('../models/note');
//form to create notes
notesCtrl.renderOneNote = (req,res)=>{
    res.render('notes/new-note')
}
notesCtrl.createNewNote = async(req,res)=>{
    const {title,description} =req.body;
    const newNote =new notaModel({title,description});
    await newNote.save();
    res.redirect('/')
};
//render all notes
notesCtrl.renderNotes = async(req,res)=>{
    const lasNotas = await notaModel.find().lean();
    res.render('notes/allnotes',{lasNotas});
}
// formulario de edicion
notesCtrl.renderEditForm = (req,res)=>{
    res.send('se manda a form con info');
}
notesCtrl.updateNote = ( req,res)=> {
    res.send('se recibe modificacion de nota');
}
//elemina nota
notesCtrl.deleteNote = async(req,res)=> {
    await notaModel.findByIdAndDelete(req.params.id,(err,docs)=>{
            if(err){ console.log(err)}
            else{console.log(docs)}
        }); 
        res.redirect('/notas')}


module.exports = notesCtrl