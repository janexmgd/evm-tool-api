import express from 'express';
import walletController from '../controller/wallet.controller.js';

const { create } = walletController;
const walletRouter = express.Router();

walletRouter.post('/wallet/create', create);

export default walletRouter;
