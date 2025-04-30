const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.listen(port, () => console.log(`Server gestart op port: ${port}`));

const autos = {
    "toyota": {
      "corolla": {
        "uitvoering": "hybride",
        "carrosserie": "hatchback"
      },
      "yaris": {
        "uitvoering": "elektrisch",
        "carrosserie": "compact"
      }
    }
}

app.get('/autos', (req, res) =>{
    res.status(200).send(autos)
})

app.post('/autos', (req, res) =>{
    automerken.push(req.body)
    res.sendStatus(200)
})