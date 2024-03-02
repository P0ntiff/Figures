import { Client, environments } from 'plaid'


const plaidClient = new Client(
    process.env.PLAID_CLIENT_ID,
    process.env.PLAID_SECRET,
    process.env.PLAID_PUBLIC_KEY,
    environments.development,
    {
      version: '2018-05-22'
    }
);

export default plaidClient;