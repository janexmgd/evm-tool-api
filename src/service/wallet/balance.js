import { Network, Alchemy, Utils } from 'alchemy-sdk';
import dotenv from 'dotenv';
dotenv.config();
const alchemyAPIKEY = process.env.ALCHEMY_API_KEY;
const balanceWallet = async (address, networkReq, ca) => {
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
    if (!ca) {
      let ethBalance = await alchemy.core.getBalance(address);
      ethBalance = Utils.formatEther(ethBalance);
      const data = {
        network: network,
        address,
        eth: ethBalance,
      };
      return data;
    } else {
      let balances = await alchemy.core.getTokenBalances(address);
      const tokens = balances.tokenBalances.filter((token) => {
        return token.contractAddress.toLowerCase() == ca.toLowerCase();
      });
      let data;
      for (const token of tokens) {
        let balance = token.tokenBalance;
        const metadata = await alchemy.core.getTokenMetadata(
          token.contractAddress
        );
        balance = balance / Math.pow(10, metadata.decimals);
        data = {
          network: network,
          address,
          token: {
            ca: ca,
            name: metadata.name,
            symbol: metadata.symbol,
            balance: balance,
          },
        };
      }
      return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default balanceWallet;
