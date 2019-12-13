const { pool } = require('../../config');

module.exports = (nombre, apellido) => {
    console.log('nombre: '+nombre);
    console.log('apellido: '+apellido);
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO Usuarios (nombre, apellido) VALUES ($1, $2)', [nombre, apellido], error => {
            if (error) {
                throw error
            }
            resolve({ status: 'success', message: 'User added.' });
            // response.status(201).json({ status: 'success', message: 'User added.' })
        })
    });
}