import express from 'express';
import cors from 'cors';
import fs from 'fs';
import rateLimit from 'express-rate-limit';

const app = express();
const requestlimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: 'Te veel verzoeken, probeer later opnieuw.'
});

app.use(requestlimit)
app.use(express.json());
app.use(cors({
  origin: 'https://zenbone.site'
}));
app.use(express.static('public'));

const filePathAutos = './src/data/autos.json';
const autodata = fs.readFileSync(filePathAutos, 'utf-8');
const autosfile = JSON.parse(autodata);

const filePathTestKeuzes = './src/data/testkeuzes.json';
const datatestkeuzes = fs.readFileSync(filePathTestKeuzes, 'utf-8');
const testkeuzesfile = JSON.parse(datatestkeuzes);


export { app, filePathAutos, autosfile, filePathTestKeuzes, testkeuzesfile }; 