const indexCtrl ={};

indexCtrl.renderIndex = async(req,res) =>{
   await res.render('index');
};

indexCtrl.renderAbout = async function(req,res){
    await res.render('about');
};

module.exports= indexCtrl;