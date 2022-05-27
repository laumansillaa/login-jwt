const axios = require('axios');
const {User} = require('../../db').models;
const {compareSync} = require('bcrypt')

module.exports = async function (req, res, next) {
    console.log('------LoginUser------');

    try {

        const {username, password} = req.body;

        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if (!user) {

            res.status(404).send('User is required');

        } else if (!compareSync(password, user.password)) {

            res.status(404).send('Password invalid');

        } else {
            res.status(200).send(user)
        }

    } catch (error) {
        next(error);
    }

}


//Check encrypt (cifrado reversible)