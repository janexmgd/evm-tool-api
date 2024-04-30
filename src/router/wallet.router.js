import express from 'express';
import walletController from '../controller/wallet.controller.js';

const { create, balance, tokenBalance } = walletController;
const walletRouter = express.Router();

walletRouter.post('/wallet/create', create);
walletRouter.get('/wallet/balance/:network', balance);
walletRouter.get('/wallet/balance/token/:network', tokenBalance);
export default walletRouter;
