import { app } from './app.js';
import './javascript/paths/AutoResource.js';
import './javascript/paths/TestKeuzesResource.js';

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server gestart op port: ${port}`);
});
