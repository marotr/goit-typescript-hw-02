import axios, { AxiosResponse } from 'axios';
import {QueryParams, ImageData} from '../../interfaces/interfaces'


axios.defaults.baseURL = 'https://api.unsplash.com';
const CLIENT_ID = 'otANXC1EJFsVllXe4H6I4all7gWw62R5SlyCizaq6X4';

const fetchApi = async <T>(url: string, params: Record<string, any>): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url, { params });
    return response.data;
  } catch (error) {
   
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('API error:', error.response.status, error.response.data);
      } else {
        console.error('Network error:', error.message);
      }
    } else {
      console.error('Unexpected error:', (error as Error).message);
    }
    throw error;
  }
};

export const getImagesApi = async ({ searchQuery, page }: QueryParams): Promise<ImageData[]> => {
  const params = {
    query: searchQuery,
    page,
    client_id: CLIENT_ID,
  };

  const data = await fetchApi<{ results: ImageData[] }>('/search/photos', params);
  return data.results;
};
