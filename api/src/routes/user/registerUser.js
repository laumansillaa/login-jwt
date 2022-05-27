const axios = require('axios');
const bcrypt = require('bcrypt');
const {User} = require('../../db').models;


module.exports = async function (req, res, next) {
    console.log('------RegisterUser------');

    try {

        const {username, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const alreadyExist = await User.findOne({
            where: {
                username: username
            }
        })

        if (alreadyExist) {

            res.status(404).send('User already exist');
        } else {
            
            const user = await User.create({
                username,
                password: hashedPassword
            });
    
            res.status(200).send(hashedPassword);

        }

    } catch (error) {
        next(error);
    }
    
}