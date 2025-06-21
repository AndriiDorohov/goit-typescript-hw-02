import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
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
