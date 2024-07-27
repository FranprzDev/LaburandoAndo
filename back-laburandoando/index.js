const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

/* rutas */

const user = require("./src/routes/user.route");
const workerRouter = require("./src/routes/worker.route");
const categoryRouter = require("./src/routes/category.route");

const app = express();
app.use(cors());

const port = 8000;

app.use(express.json({ limit: "50mb" }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rutas para la aplicación
app.use("/user", user);
app.use("/worker", workerRouter);
app.use("/category", categoryRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a la base de datos");

    app.listen(port, () => {
      console.log(`La aplicación se está ejecutando en el puerto ${port}`);
    });
  })
  .catch(() => {
    console.log("Hubo un error en la conexión a la base de datos...");
  });
