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
    req.flash('successMsg','Nota creada satisfactoriamente')
    res.redirect('/notas')
};
//render all notes
notesCtrl.renderNotes = async(req,res)=>{
    const lasNotas = await notaModel.find().lean();
    res.render('notes/allnotes',{lasNotas});
}
// formulario de edicion
notesCtrl.renderEditForm = async(req,res)=>{
    const editionsNote = await notaModel.findById(req.params.id).lean()
    console.log(editionsNote)
    res.render('notes/editionsForm',{ editionsNote });
}
notesCtrl.updateNote =async ( req,res)=> {
    const {title,description} = req.body
    await notaModel.findByIdAndUpdate(req.params.id, {title,description},
        (err,docs)=>{
            if(err){console.log(err)}
            else{console.log('actualizado')}
        });
    req.flash('successMsg','Nota actualizada satisfactoriamente')
    res.redirect('/notas');
}
//elemina nota
notesCtrl.deleteNote = async(req,res)=> {
    await notaModel.findByIdAndDelete(req.params.id,(err,docs)=>{
            if(err){ console.log(err)}
            else{console.log('eliminado')}
        }); 
        req.flash('successMsg','Nota eliminada satisfactoriamente')
        res.redirect('/notas')}

module.exports = notesCtrl