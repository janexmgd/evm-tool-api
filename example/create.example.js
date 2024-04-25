import axios from 'axios';
import { setTimeout } from 'node:timers/promises';
const createWallet = async () => {
  try {
    const { data } = await axios.post(
      'https://evm-tool-api.vercel.app/wallet/create'
    );
    return data;
  } catch (error) {
    throw error;
  }
};
(async () => {
  try {
    let i = 1;
    while (i <= 10) {
      const rCreateWallet = await createWallet();
      if (rCreateWallet.code == 200) {
        const { address, privateKey } = rCreateWallet.data;
        const toPrint = `[${i}] ${address} || ${privateKey}`;
        console.log(toPrint);
      }
      await setTimeout(100);
      i++;
    }
  } catch (error) {
    console.log(error);
  }
})();
