const UP_BASE_URL = 'https://api.up.com.au/api/v1';

export const getUpTransactions = async () => {

    if (!process.env.UP_ACCESS_TOKEN) {
        console.error('Up access token not set in env vars');
    }

    let filters = '';
    filters += `?filter[since]=${encodeURIComponent('2024-01-01T00:00:00+10:00')}`;
    const url = `${UP_BASE_URL}/transactions${filters}`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.UP_ACCESS_TOKEN}`
        },
    });

    if (!response.ok == true) {
        console.error(await response.json())
        return;
    }

    const parsedResponse = await response.json();

    const parsedTxns = parsedResponse.data.map(txn => {
        return {
            description: txn.attributes.description,
            message: txn.attributes.message,
            rawText: txn.attributes.rawText,
            amount: txn.attributes.amount.value,
            date: txn.attributes.settledAt ? txn.attributes.settledAt : txn.attributes.createdAt,
            transferAccount: txn.relationships.transferAccount.data,
            category: txn.relationships.category.data
        }
    });
    console.log(parsedTxns);
    return parsedTxns;
}