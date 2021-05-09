import Axios from 'axios';
const source = Axios.CancelToken.source()

const instance = Axios.create({
  baseURL: "https://api.giphy.com/v1/gifs"
})

export default instance
