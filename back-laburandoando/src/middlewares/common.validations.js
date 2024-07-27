const { validationResult } = require("express-validator");
const User = require("../models/user.model");

const expressValidations = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400);
    return res.send({ errors: result.array() });
  }
  next();
};

const emailValidation = async (req, res, next) => {
  const { mail } = req.body;
  const e = await User.findOne({ mail: mail });

  if (e !== null) {
    res.status(400);
    return res.json({ data: [], error: ["El email ya está ocupado"] });
  }

  next();
};

const passwordValidation = (req, res, next) => {
  const contrasenia = req.body.pass;

  const tieneMayuscula = /[A-Z]/.test(contrasenia);
  const tieneNumero = /\d/.test(contrasenia);
  const tieneCaracterEspecial = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(
    contrasenia
  );
  const longitudValida = contrasenia.length >= 8;

  if (
    tieneMayuscula &&
    tieneNumero &&
    tieneCaracterEspecial &&
    longitudValida
  ) {
    next();
  } else {
    res
      .status(400)
      .json({
        data: [],
        error: ["La contraseña no cumple con los requisitos necesarios."],
      });
  }
};

module.exports = {
  expressValidations,
  emailValidation,
  passwordValidation,
};
