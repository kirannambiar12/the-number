import { firebaseAPI } from "@/app/global/configStore/axios";
import { AxiosRequestConfig } from "axios";

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await firebaseAPI(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
