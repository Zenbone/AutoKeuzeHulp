import express from 'express'
const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.listen(port, () => console.log(`Server gestart op port: ${port}`));

const automerken = {
    "namen":[{
        "naam": "toyota", 
        "jaar": 2024
    }]
}
const automodellen = {
    "toyota":[{
        "naam": "corolla",
        "jaar": 2021
    }]
}
const automodel = {
    "naam": "corolla",
    "merk": "toyota",
    "jaar": 2024
}

app.get('/data/automerken', (req, res) =>{
    res.status(200).send(automerken)
})
app.get('/data/automodellen', (req, res) =>{
    res.status(200).send(automodellen)
})
app.get('/data/autmodel', (req, res) =>{
    res.status(200).send(automodel)
})

app.post('/data/automerken', (req, res) =>{
    automerken.push(req.body)
    res.sendStatus(200)
})