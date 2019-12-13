module.exports = function(app){
    app.get('/profile/',(req,res)=>{
        res.send('Hola, estas en la ruta /profile');
    });
}