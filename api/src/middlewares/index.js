const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

module.exports = function (app) {
    
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));
    //app.use(cookieParser());
    app.use(morgan('dev'));
    
    app.use(
        cors({
            origin: '*',
            credentials: true
        })
    );


}