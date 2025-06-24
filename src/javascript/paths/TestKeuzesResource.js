import fs from 'fs';
import { app, filePathTestKeuzes, testkeuzesfile } from '../../app.js'

app.get('/testkeuzes', (req, res) => {
    res.status(200).send(testkeuzesfile)
})
app.get('/testkeuzes/:keuze', (req, res) => {
    res.status(200).send(testkeuzesfile[req.params.keuze])
})

app.post('/testkeuzes', (req, res) => {
    const origin = req.get('Origin');
    if (origin !== 'https://zenbone.site') {
    return res.status(403).json({ message: 'Niet toegestaan (origin)' });
    }
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

app.delete('/testkeuzes', (req, res) => {
    // const origin = req.get('Origin');
    // if (origin !== 'https://zenbone.site') {
    // return res.status(403).json({ message: 'Niet toegestaan (origin)' });
    // }
    // let oudekeuze = { [req.params.keuze]: structuredClone(testkeuzesfile[req.params.keuze]) };
    let oudekeuze = "test"
    delete testkeuzesfile["favmerken"]
    delete testkeuzesfile["onfavmerken"]
    delete testkeuzesfile["uitvoering"]
    delete testkeuzesfile["soortautos"]
    delete testkeuzesfile["gebruik"]
    delete testkeuzesfile["interesses"]
    delete testkeuzesfile["minprijs"]
    delete testkeuzesfile["maxprijs"]


    fs.writeFileSync(filePathTestKeuzes, JSON.stringify(testkeuzesfile, null, 2));
    res.status(200).json({
        message: 'alle keuzes verwijderd! ',
        data: oudekeuze
    });
})

app.delete('/testkeuzes/:keuze', (req, res) => {
    const origin = req.get('Origin');
    if (origin !== 'https://zenbone.site') {
    return res.status(403).json({ message: 'Niet toegestaan (origin)' });
    }
    let oudekeuze = { [req.params.keuze]: structuredClone(testkeuzesfile[req.params.keuze]) };

    delete testkeuzesfile[req.params.keuze]

    fs.writeFileSync(filePathTestKeuzes, JSON.stringify(testkeuzesfile, null, 2));
    res.status(200).json({
        message: 'keuze verwijderd! ',
        data: oudekeuze
    });
})