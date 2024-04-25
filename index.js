import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import router from './src/router/index.js';
dotenv.config();
const app_name = process.env.APP_NAME;
const app_port = process.env.APP_PORT;
const app = express();
app.use(cors());
app.use(helmet());
app.use(router);
app.listen(app_port || 3000, '0.0.0.0', () => {
  console.log(`${app_name} REST API RUN at PORT ${app_port}`);
});
app.get('/', (req, res) => {
  res.status(200).send({
    app_name,
    status: 'ok',
  });
});
