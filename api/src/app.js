const app = require('express')();

app.name = 'SERVER';
app.set('port', 3001);

//Middleware
require('./middlewares')(app);

//Routes
require('./routes')(app);

//Error catching endware
app.use((err, req, res, next) => {
    console.log('-----ERROR CATCHING MIDDLEWARE-----');
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    return res.status(status).send(message)
})


module.exports = app;