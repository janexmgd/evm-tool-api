import express from 'express';
import walletRouter from '../router/wallet.router.js';

const router = express.Router();
router.use(walletRouter);
export default router;
