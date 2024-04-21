import { usuarios } from "../index.js";
import { __dirname } from "../index.js";

export const authUsuarios = (req, res, next) => {
  const usuario = req.params.usuario;
  if (usuarios.usuarios.includes(usuario)) {
    next();
  } else {
    res.sendFile(__dirname + "/public/assets/img/who.jpeg");
  }
};
