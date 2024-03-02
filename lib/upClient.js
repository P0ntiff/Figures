const UP_BASE_URL = 'https://api.up.com.au/api/v1';

export const getUpTransactions = async () => {

    if (!process.env.UP_ACCESS_TOKEN) {
        console.error('Up access token not set in env vars');
    }

    const url = `${UP_BASE_URL}/transactions`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.UP_ACCESS_TOKEN}`
        },
    });

    const data = await response.json();
    console.log(data);
    return data;
}