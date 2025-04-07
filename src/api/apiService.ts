import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const apiCaller = axios.create({});

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    const errorMessage =
      (axiosError.response?.data as { message?: string })?.message || 'An error occurred';
    toast.error(errorMessage);
  } else {
    toast.error('An unexpected error occurred');
  }
};

export const apiService = {
  getData: async (url: string) => {
    try {
      const response = await apiCaller.get(url);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error; // Rethrow the error for further handling if needed
    }
  },
};
