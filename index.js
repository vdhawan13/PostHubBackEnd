import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

dotEnv.config({ path: './.env' });

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({ limit: '50mb', parameterLimit: 1000000, extended: true })
);

const port = process.env.PORT || 5000;

mongoose
  .connect(`mongodb+srv://naveenkumar709n:Naveen%2398142@cluster0.8qamxd3.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected');
    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

import crudRoutes from "./routes/Crud.js";
app.use('/api', crudRoutes);