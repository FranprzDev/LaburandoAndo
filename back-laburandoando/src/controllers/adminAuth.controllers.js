// const bcrypt = require("bcryptjs");
// const { JWT_SECRET } = require("../common/constants")
// const jwt = require("jsonwebtoken");


// const loginAdmin = async (req, res) => {
//   const { mail, contrasenia } = req.body;

//   const admin = await Admin.findOne({mail});

//   if (admin === null) {
//     res.status(404);
//     return res.json({ message: "Administrador no encontrado" });
//   }

//   const isMatch = bcrypt.compareSync(contrasenia, admin.contrasenia);

//   if (!isMatch) {
//     res.status(401);
//     return res.json({ message: "Sin autorización / Contraseña Incorrecta" });
//   }

//   const token = jwt.sign(
//     {
//       id: admin._id,
//       nombre: admin.nombre,
//       apellido: admin.apellido,
//       direccion: admin.direccion,
//       dni: admin.dni,
//       celular: admin.celular,
//       mail: admin.mail
//     },
//     JWT_SECRET
//   );
  
//   res.status(200);
//   res.json({ access_token: token });
// };

// module.exports = {
//   loginAdmin,
// };
