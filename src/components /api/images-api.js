import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com';
const CLIENT_ID = 'otANXC1EJFsVllXe4H6I4all7gWw62R5SlyCizaq6X4';

export const getImagesApi = async (searchQuery, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      query: searchQuery,
      page,
      client_id: CLIENT_ID,
    },
  });
  return response.data.results; 
};
        