import axios from 'axios';
import { setTimeout } from 'node:timers/promises';
class tabular {
  constructor(address, privateKey) {
    this.address = address;
    this.privateKey = privateKey;
  }
}
let table = {};
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
        table[i] = new tabular(address, privateKey);
      }
      await setTimeout(100);
      i++;
    }
    console.table(table);
    table = {};
  } catch (error) {
    console.log(error);
  }
})();
