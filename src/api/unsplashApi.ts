import axios from 'axios';
import type { UnsplashImage } from '../types.ts';

axios.defaults.baseURL = 'https://api.unsplash.com';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

interface FetchImagesResponse {
  images: UnsplashImage[];
  totalPages: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });

  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};
