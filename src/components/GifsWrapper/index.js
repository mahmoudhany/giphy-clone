import React, { useCallback, useEffect, useState } from 'react'
import axios from '../../API'
import Gif from '../Gif';
import './gifWrapper.scss'

export default function GifsWrapper({ endpoint, limit, offset, keyword }) {

  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const apiKey = process.env.REACT_APP_API_KEY

  const fetchTrending = useCallback(
    async () => {
      setLoading(true)

      try {
        const response = await axios.get(
          `/${endpoint}?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}`
        )
        setGifs((_) => [...response.data.data])
        setLoading(false)
      } catch (error) {
        setLoading(false)
        alert(error.message)
      }
    }, [endpoint, limit, keyword, offset, apiKey]);

  useEffect(() => {
    fetchTrending()
  }, [fetchTrending])

  return (
    <div className='container'>
      <div className="list-wrapper">
        {keyword && <h1><span>{keyword}</span></h1>}
        {
          !loading && gifs.length > 0 ?
            (
              <div className="list">
                {
                  gifs.map(({ id, title, images: { downsized_large } }) => (
                    <Gif
                      key={id}
                      imageUrl={downsized_large.url}
                      title={title}
                      height={downsized_large.height}
                    />
                  ))
                }
              </div>
            ) : <p className='text-center'>No GIFs found for: {keyword}</p>
        }
      </div>
    </div >
  )
}
