// Importo express
const express = require("express");
// Asseggno ad app l'oggetto ottenuto richiamando il metodo express
const app = express();
// Creo una porta dove mettere in ascolto il server
const port = 3000;

// Importo l'array di ricette
const { arrayRicette } = require("./arrDolci.js");
console.log(arrayRicette);

// Setto come pubblica la cartella public per poterci accedere
app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log("Server del mio blog");
});

app.get("/bacheca", (request, response) => {
  // Qui restituisco un oggetto che contiene l'array di oggetti arrayRicette
  const oggettoReturn = { arrayRicette };
  // Invio la risposta convertendola in JSON
  // Il parametro sarà il contenuto della nostra risposta
  response.json(oggettoReturn);
});

app.listen(port, () => {
  console.log("Sono in ascolto bro");
});
