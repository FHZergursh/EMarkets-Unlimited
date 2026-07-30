import express from 'express';
import { setupProductsDB } from './db/db.js';
import productRouter from './routes/productRoutes.js';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())



app.use('/api/products', productRouter) 


setupProductsDB().then(
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}));