import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://zenbone.site'
}));

const filePathAutos = './src/data/autos.json';
const autodata = fs.readFileSync(filePathAutos, 'utf-8');
const autosfile = JSON.parse(autodata);

const filePathTestKeuzes = './src/data/testkeuzes.json';
const datatestkeuzes = fs.readFileSync(filePathTestKeuzes, 'utf-8');
const testkeuzesfile = JSON.parse(datatestkeuzes);


export { app, filePathAutos, autosfile, filePathTestKeuzes, testkeuzesfile }; 