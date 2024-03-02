require('dotenv').config()

import { fetchTransactions } from '../lib/plaidFetch';

(async () => {
  const res = await fetchTransactions()
  console.log('Transactions fetch successful!')
  console.log(res)
})()
