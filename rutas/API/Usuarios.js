const API_PATH = '/api';
const getUsers = require('../../db/querys/getUsers');
const addUser = require('../../db/querys/addUser');

module.exports = (app)=>{
    app.get(`${API_PATH}/Usuarios`,async (req,res)=>{
        const resp = await getUsers();
        return res.status(200).json(resp);
    });

    app.post(`${API_PATH}/Usuarios`,async (req,res)=>{
        console.log('req.body: '+req.body.nombre);
        console.log('req.body: '+req.body.apellido);
        const { nombre, apellido } = req.body
        if (nombre || apellido) {
            const resp = await addUser( nombre, apellido);
            return res.status(201).json(resp);
        }
        res.status(400).send({reason: "no User sent"});
    });
}