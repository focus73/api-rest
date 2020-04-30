// imports
var jwt = require('jsonwebtoken')

const JWT_SIGN_SECRET = '0sjs6gf9mk9nwxq22pzn5hvpxmpgtty34trrrfx8gz17sy6djnm0xuc65bi9'


//Exported function

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    }
}