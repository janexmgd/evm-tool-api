import response from '../helper/response.js';
import createWallet from '../service/wallet/create.js';
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
};
export default walletController;
