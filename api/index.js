const server = require('./src/app.js');
const db = require('./src/db.js');
const axios = require('axios');
const {User} = require('./src/db').models;

db.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log('Server listening on port 3001');
    });
})