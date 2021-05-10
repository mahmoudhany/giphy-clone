import Axios from 'axios';
const instance = Axios.create({
  // app base url 
  baseURL: "https://api.giphy.com/v1/gifs"
})

export default instance
