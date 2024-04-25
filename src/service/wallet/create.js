import { Wallet } from 'ethers';

const createWallet = () => {
  try {
    const { address, privateKey } = Wallet.createRandom();
    return {
      address,
      privateKey: privateKey.substring(2),
    };
  } catch (error) {
    throw error;
  }
};
export default createWallet;
