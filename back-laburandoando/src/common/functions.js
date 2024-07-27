const bcrypt = require("bcryptjs");

function encriptarContrasenia(contrasenia) {
    const salt = bcrypt.genSaltSync(5);
    return hashedContra = bcrypt.hashSync(contrasenia, salt);
}

module.exports = {
    encriptarContrasenia,
}