import fs from 'fs';
import { app, filePathAutos, autosfile } from '../../app.js';

const niks = "160917062025"

app.get('/autos', (req, res) => {
  res.status(200).send(autosfile)
})
app.get('/autos/:merk', (req, res) => {
  res.status(200).send(autosfile[req.params.merk])
})
app.get('/autos/:merk/:model', (req, res) => {
  res.status(200).send(autosfile[req.params.merk][req.params.model])
})
app.get('/autos/:merk/:model/:spec', (req, res) => {
  res.status(200).send(autosfile[req.params.merk][req.params.model][req.params.spec])
})

app.post(`/${niks}/autos`, (req, res) => {
  const origin = req.get('Origin');
  if (origin !== 'https://zenbone.site') {
    return res.status(403).json({ message: 'Niet toegestaan (origin)' });
  }
  let { merk, model, specs } = req.body
  let object = {}

  if (!autosfile[merk]) {
    object = { [merk]: { [model]: specs } }
    Object.assign(autosfile, object)
  } else if (!autosfile[merk][model]) {
    object = { [model]: specs }
    Object.assign(autosfile[merk], object)
  } else {
    object = specs
    Object.assign(autosfile[merk][model], object)
  }

  fs.writeFileSync(filePathAutos, JSON.stringify(autosfile, null, 2));
  res.status(200).json({
    message: 'Object succesvol toegevoegd!',
    data: object
  });
})

app.patch(`/${niks}/autos/:merk/:model`, (req, res) => {
  const origin = req.get('Origin');
  if (origin !== 'https://zenbone.site') {
    return res.status(403).json({ message: 'Niet toegestaan (origin)' });
  }
  let merk = req.params.merk
  let model = req.params.model
  let nieuwespecs = req.body
  let oudespecs = structuredClone(autosfile[merk][model]);

  for (let key in nieuwespecs) {
    if (key in autosfile[merk][model]) {
      autosfile[merk][model][key] = nieuwespecs[key];
    }
  }

  fs.writeFileSync(filePathAutos, JSON.stringify(autosfile, null, 2));
  res.status(200).json({
    message: 'specificaties aangepast',
    data: oudespecs, nieuwespecs
  });
})

app.delete(`/${niks}/autos/:merk/:model/:spec`, (req, res) => {
  const origin = req.get('Origin');
  if (origin !== 'https://zenbone.site') {
    return res.status(403).json({ message: 'Niet toegestaan (origin)' });
  }
  let oudespec = { [req.params.spec]: structuredClone(autosfile[req.params.merk][req.params.model][req.params.spec]) };

  delete autosfile[req.params.merk][req.params.model][req.params.spec]

  fs.writeFileSync(filePathAutos, JSON.stringify(autosfile, null, 2));
  res.status(200).json({
    message: 'specificatie verwijderd! ',
    data: oudespec
  });
})

app.delete(`/${niks}/autos/:merk/:model`, (req, res) => {
  const origin = req.get('Origin');
  if (origin !== 'https://zenbone.site') {
    return res.status(403).json({ message: 'Niet toegestaan (origin)' });
  }
  let oudemodel = { [req.params.model]: structuredClone(autosfile[req.params.merk][req.params.model]) };

  delete autosfile[req.params.merk][req.params.model]

  fs.writeFileSync(filePathAutos, JSON.stringify(autosfile, null, 2));
  res.status(200).json({
    message: 'model verwijderd! ',
    data: oudemodel
  });
})

app.delete(`/${niks}/autos/:merk/:model`, (req, res) => {
  const origin = req.get('Origin');
  if (origin !== 'https://zenbone.site') {
    return res.status(403).json({ message: 'Niet toegestaan (origin)' });
  }

  let oudemerk = { [req.params.merk]: structuredClone(autosfile[req.params.merk]) };

  delete autosfile[req.params.merk]

  fs.writeFileSync(filePathAutos, JSON.stringify(autosfile, null, 2));
  res.status(200).json({
    message: 'merk verwijderd! ',
    data: oudemerk
  });
})