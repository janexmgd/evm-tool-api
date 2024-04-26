import dotenv from 'dotenv';
dotenv.config();

const env = {
  alchemyApiKey: process.env.ALCHEMY_API_KEY,
  appName: process.env.APP_NAME,
};
console.log(env);
export default env;
