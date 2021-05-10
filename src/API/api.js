import Axios from '../API';

export const fetchGifsAction = async ({ limit = 5, offset, keyword, endpoint }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  try {
    const url = `/${endpoint}?api_key=${API_KEY}${keyword ? ('&q=' + keyword) : ''}&limit=${limit}&offset=${offset}`;
    const response = await Axios.get(`${url}`);
    return {
      success: true,
      data: response.data.data,
      count: response.data.pagination.total_count,
    }
  } catch (err) {
    return {
      data: [],
      count: 0,
      message: err.message
    }
  }
}
