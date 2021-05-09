import React, { useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
// import axios from '../../API'
import Axios from 'axios';
import Gif from '../Gif';
import Loading from '../Loading';
import './gifWrapper.scss'

export default function GifsWrapper({ endpoint, limit, keyword = null }) {

  const [gifs, setGifs] = useState({ list: [] })
  const [loading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [offset, setOffset] = useState(0)
  const apiKey = process.env.REACT_APP_API_KEY


  useEffect(() => {
    // let source = Axios.CancelToken.source()

    const fetchGifs = async () => {
      setLoading(true)
      try {
        const response = await Axios.get(
          `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${apiKey}${keyword ? ('&q=' + keyword) : ''}&limit=${limit}&offset=${offset}`,
          //    {
          //   cancelToken: source.token
          // }
        )
        setTotalCount(response.data.pagination.total_count)
        setGifs(prev => ({ list: [...prev.list, ...response.data.data] }))
        setLoading(false)

      } catch (error) {
        setLoading(false)
        // if (Axios.isCancel(error)) {
        //   console.log('cancel error');
        // } else {
        console.log(error.message)
        // }

      }
    }
    fetchGifs()
    return () => {
      // mounted = false
      // source.cancel()
    }
  }, [endpoint, limit, offset, apiKey, keyword])

  const renderList = () => {
    return (
      totalCount > 0 &&
      <InfiniteScroll
        dataLength={gifs.list.length} //This is important field to render the next data
        next={() => setOffset(prev => limit + prev)}
        hasMore={totalCount > offset}
        className='list'
        loader={loading && <Loading />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {
          gifs.list.map(({ id, title, images: { downsized_large } }, index) => {
            if (index > 0 && (gifs.list[index - 1].id !== id)) {
              return <Gif
                key={id}
                imageUrl={downsized_large.url}
                title={title}
                height={downsized_large.height}
              />
            }
          }
          )
        }
      </InfiniteScroll >
      //     :
      // <p className='text-center'>No GIFs found for: {keyword}</p>
    )
  }
  return (
    <div className='container'>
      <div className="list-wrapper">
        {keyword && <h1><span>{keyword}</span></h1>}
        {
          renderList()
        }
      </div>
    </div >
  )
}
