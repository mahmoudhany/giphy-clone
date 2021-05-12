import Axios from '../API';

const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchGifsAction = async ({ limit = 5, offset, keyword, endpoint }) => {

  try {
    const url = `/${endpoint}?api_key=${API_KEY}${keyword ? ('&q=' + keyword) : ''}&limit=${limit}&offset=${offset}&rating=g`;
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

export const fetchSingleGif = async (id) => {
  const url = `/${id}?api_key=${API_KEY}`
  try {
    const response = await Axios.get(`${url}`);
    return response.data.data
  } catch (error) {
    console.log(error.message)
    return {}
  }
}
