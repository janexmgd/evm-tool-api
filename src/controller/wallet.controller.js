import response from '../helper/response.js';
import createWallet from '../service/wallet/create.js';
import balanceWallet from '../service/wallet/balance.js';
import tokenBalance from '../service/wallet/tokenBalance.js';
const { success, failed } = response;
const walletController = {
  create: async (req, res, next) => {
    try {
      const { address, privateKey } = createWallet();
      return success(res, {
        code: 200,
        status: 'success',
        message: 'success create wallet',
        data: {
          address,
          privateKey,
        },
      });
    } catch (error) {
      console.log(error);
      return failed(res, {
        code: error.code || 500,
        status: 'error',
        message: error.message || 'internal server error',
      });
    }
  },
  balance: async (req, res, next) => {
    try {
      const { network } = req.params;
      const { ca, address } = req.query;
      if (!address || !network) {
        return failed(res, {
          code: 400,
          status: 'error',
          message: 'no address or network at request',
        });
      }
      if (!ca) {
        const data = await balanceWallet(address, network);
        return success(res, {
          code: 200,
          status: 'success',
          message: 'success get balance',
          data,
        });
      } else {
        const data = await balanceWallet(address, network, ca);
        return success(res, {
          code: 200,
          status: 'success',
          message: 'success get balance',
          data,
        });
      }
    } catch (error) {
      if (error.reason) {
        error.code = 400;
      }
      return failed(res, {
        code: error.code || 500,
        status: 'error',
        message: error.reason || error.message || 'internal server error',
      });
    }
  },
  tokenBalance: async (req, res, next) => {
    try {
      const { network } = req.params;
      const { address } = req.query;
      if (!address || !network) {
        return failed(res, {
          code: 400,
          status: 'error',
          message: 'no address or network at request',
        });
      }
      let data = await tokenBalance(address, network);
      return success(res, {
        code: 200,
        status: 'success',
        message: 'success get balance all token',
        data,
      });
    } catch (error) {
      if (error.reason) {
        error.code = 400;
      }
      return failed(res, {
        code: error.code || 500,
        status: 'error',
        message: error.reason || error.message || 'internal server error',
      });
    }
  },
};
export default walletController;
