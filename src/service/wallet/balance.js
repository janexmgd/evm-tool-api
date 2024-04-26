import { Network, Alchemy, Utils } from 'alchemy-sdk';
import dotenv from 'dotenv';
dotenv.config();
const alchemyAPIKEY = process.env.ALCHEMY_API_KEY;
const balanceWallet = async (address, networkReq) => {
  try {
    let network;
    if (networkReq == 'base') {
      network = Network.BASE_MAINNET;
    } else {
      throw new Error('NO network supported');
    }
    const settings = {
      apiKey: alchemyAPIKEY,
      network: network,
    };
    const alchemy = new Alchemy(settings);
    let ethBalance = await alchemy.core.getBalance(address);
    ethBalance = Utils.formatEther(ethBalance);
    const balances = await alchemy.core.getTokenBalances(address);
    const nonZeroBalances = balances.tokenBalances.filter((token) => {
      return token.tokenBalance !== '0';
    });
    let tokenList = [];
    for (let token of nonZeroBalances) {
      let balance = token.tokenBalance;
      const metadata = await alchemy.core.getTokenMetadata(
        token.contractAddress
      );
      balance = balance / Math.pow(10, metadata.decimals);
      const tokenx = {
        name: metadata.name,
        balance: balance,
        symbol: metadata.symbol,
        ca: token.contractAddress,
      };
      tokenList.push(tokenx);
    }
    const data = {
      network: Network.BASE_MAINNET,
      address,
      eth: ethBalance,
      token: [...tokenList],
    };
    return data;
  } catch (error) {
    throw error;
  }
};
export default balanceWallet;
