//Modulos commonjs
import express from "express";
import { authUsuarios } from "./middleware/auth.middlware.usuario.js";

const app = express();

export const __dirname = import.meta.dirname;
export const usuarios = {
  usuarios: ["faguilar", "samuel", "antonia", "luisa", "pancho"],
};

//middleware_carpeta publica
console.log(__dirname);
app.use(
  "/abracadabra/juego/:usuario",
  authUsuarios,
  express.static(__dirname + "/public")
);

//enrutando

app.get("/abracadabra/usuarios", (req, res) => {
  return res.json(usuarios);
});

app.get("/abracadabra/conejo/:n", (req, res) => {
  const numeroUser = parseInt(req.params.n);
  const numeroAleatorio = Math.floor(Math.random() * 4) + 1;

  if (numeroUser === numeroAleatorio) {
    res.sendFile(__dirname + "/public/assets/img/conejito.jpg");
  } else {
    res.sendFile(__dirname + "/public/assets/img/voldemort.jpg");
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ method: "GET" });
});
app.post("/", (req, res) => {
  res.status(201).json({ method: "POST" });
});

app.use("*", (req, res) => {
  res.status(404).send("🌵Page not Found🦖");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
