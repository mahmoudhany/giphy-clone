import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs"
})

export default instance
// trending?api_key=NUbUTugl7KLH7YW0XtORll59gmS0qLwC&limit=2
