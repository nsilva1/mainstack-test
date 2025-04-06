import { ENDPOINTS } from "../lib/endpoints";
import { apiService } from "./apiService";
import { IWalletInfo } from "../interfaces/WalletInterface";

export const getWalletInfo = async (): Promise<IWalletInfo> => {
    try {
        const response = await apiService.getData(ENDPOINTS.Wallet.mainURL);
        return response;
    } catch (error) {
        throw error; // Rethrow the error for further handling if needed
    }
};