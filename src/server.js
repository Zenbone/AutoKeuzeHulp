import { app } from './app.js';
import './paths/AutoResource.js';
import './paths/TestKeuzesResource.js';

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server gestart op port: ${port}`);
});
