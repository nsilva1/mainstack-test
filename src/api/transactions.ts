import { ENDPOINTS } from "../lib/endpoints";
import { apiService } from "./apiService";
import { ITransaction } from "../interfaces/TransactionsInterface";


export const getTransactions = async (): Promise<ITransaction[]> => {
    try {
        const response = await apiService.getData(ENDPOINTS.Transactions.mainURL);
        return response;
    } catch (error) {
        throw error; // Rethrow the error for further handling if needed
    }
}
