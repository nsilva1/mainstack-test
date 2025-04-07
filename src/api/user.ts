import { ENDPOINTS } from '../lib/endpoints';
import { apiService } from './apiService';
import { IUserInfo } from '../interfaces/UserInterface';

export const getUserInfo = async (): Promise<IUserInfo> => {
  try {
    const response: IUserInfo = await apiService.getData(ENDPOINTS.User.mainURL);
    return response;
  } catch (error) {
    throw error; // Rethrow the error for further handling if needed
  }
};
