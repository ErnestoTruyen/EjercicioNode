const { pool } = require('../../config');

module.exports = () => {
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM Usuarios', (error, results) => {
            if (error) {
            throw error
            }
            resolve(results.rows);
        })
    });
}