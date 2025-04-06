const BASE_API_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
    User: {
        mainURL: `${BASE_API_URL}/user`,
    },
    Wallet: {
        mainURL: `${BASE_API_URL}/wallet`,
    },
    Transactions: {
        mainURL: `${BASE_API_URL}/transactions`,
    },
}