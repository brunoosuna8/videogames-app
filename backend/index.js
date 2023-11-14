const express = require("express");
const cors = require("cors");
const { fetchData } = require("./controllers/fetchData");
const app = express();

app.use(cors());

const port = 3001;

app.get("/", async (req, res) => {
  //cuando hagamos un fetch a "https:localhost:3001/"

  const games = await fetchData();
  return res.status(200).json(games);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
