require('dotenv').config()

import { fetchTransactions } from './lib/plaidFetch';
import { transformTransactionsToUpdates } from './lib/transform';
import { updateSheet } from './lib/update';

(async () => {
  const transactions = await fetchTransactions()
  const updates = transformTransactionsToUpdates(transactions)
  updateSheet(updates)
})()
