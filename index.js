import 'dotenv/config.js'

// import { fetchTransactions } from './lib/plaidFetch.js';
import { transformTransactionsToUpdates } from './lib/transform.js';
import { getUpTransactions } from './lib/upClient.js';
import { updateSheet } from './lib/update.js';

(async () => {
  // const transactions = await fetchTransactions()
  const upTransactions = await getUpTransactions();
  // const updates = transformTransactionsToUpdates(transactions)
  // updateSheet(updates)
})()
