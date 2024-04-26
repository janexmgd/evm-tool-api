import express from 'express';
import walletController from '../controller/wallet.controller.js';

const { create, balance } = walletController;
const walletRouter = express.Router();

walletRouter.post('/wallet/create', create);
walletRouter.get('/wallet/balance', balance);

export default walletRouter;
