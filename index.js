require('dotenv').config()

import { fetchTransactions } from './lib/plaidFetch';
import { transformTransactionsToUpdates } from './lib/transform';
import { getUpTransactions } from './lib/upClient';
import { updateSheet } from './lib/update';

(async () => {
  // const transactions = await fetchTransactions()
  const upTransactions = await getUpTransactions();
  // const updates = transformTransactionsToUpdates(transactions)
  // updateSheet(updates)
})()
