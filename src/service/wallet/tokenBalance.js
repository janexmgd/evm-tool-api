import { Network, Alchemy, Utils } from 'alchemy-sdk';
import dotenv from 'dotenv';
dotenv.config();
const alchemyAPIKEY = process.env.ALCHEMY_API_KEY;

const tokenBalance = async (address, networkReq) => {
  try {
    let network;
    if (networkReq == 'base') {
      network = Network.BASE_MAINNET;
    } else if (networkReq == 'arb') {
      network = Network.ARB_MAINNET;
    } else {
      throw new Error('NO network supported');
    }
    const settings = {
      apiKey: alchemyAPIKEY,
      network: network,
    };
    const alchemy = new Alchemy(settings);
    let balances = await alchemy.core.getTokenBalances(address);
    const nonZeroBalances = balances.tokenBalances.filter((token) => {
      if (token.tokenBalance != '0' || token.tokenBalance != '0.0') {
        return token;
      }
    });
    let tokens = [];
    for (let token of nonZeroBalances) {
      let balance = token.tokenBalance;
      balance = Utils.formatEther(balance);

      tokens.push({
        contractAddress: token.contractAddress,
        balance: balance,
      });
    }
    const data = {
      network: network,
      address,
      balance: [...tokens],
    };
    return data;
  } catch (error) {
    throw error;
  }
};
export default tokenBalance;
