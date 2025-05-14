import fs from 'fs';
import { app, filePathTestKeuzes, testkeuzesfile } from '../../app.js'

// const testkeuzesdummydata = {
//   "merkfav": "toyota",
//   "merkonfav": "volkswagen",
//   "uitvoering": "hybride",
//   "soort": "sedan",
//   "gebruik": ["alledaags", "sport"],
//   "interesses": "efficientbetrouwbaar",
//   "prijsmin": "10000",
//   "prijsmax": "20000"
// }
// fs.writeFileSync(filePathTestKeuzes, JSON.stringify(testkeuzesdummydata));

app.get('/testkeuzes', (req, res) => {
    res.status(200).send(testkeuzesfile)
})

app.post('/testkeuzes', (req, res) => {
    let nieuwekeuzes = req.body
    let fouten = 0
    let object = {}
    for (let key in nieuwekeuzes) {
        if (key in testkeuzesfile) {
            fouten++
        } else {
            object[key] = nieuwekeuzes[key];        
        }
    }
    if (fouten > 0) {
        res.status(400).json({
            message: '(Een van) de keuze(s) bestaaat al kan dus niet POSTEN!',
            data: nieuwekeuzes
        });
    } else {
        Object.assign(testkeuzesfile, object)
        fs.writeFileSync(filePathTestKeuzes, JSON.stringify(testkeuzesfile, null, 2));
        res.status(200).json({
            message: 'Keuze(s) succesvol toegevoegd!',
            data: nieuwekeuzes
        });
    }
})

app.delete('/testkeuzes/:keuze', (req, res) => {
    let oudekeuze = { [req.params.keuze]: structuredClone(testkeuzesfile[req.params.keuze]) };

    delete testkeuzesfile[req.params.keuze]

    fs.writeFileSync(filePathTestKeuzes, JSON.stringify(testkeuzesfile, null, 2));
    res.status(200).json({
        message: 'keuze verwijderd! ',
        data: oudekeuze
    });
})