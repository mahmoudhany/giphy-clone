import React, { useCallback, useEffect, useState } from 'react'
import GifsWrapper from '../components/GifsWrapper'
import { fetchGifsAction } from '../API/api';

const Trending = () => {
  const [trending, setTrending] = useState({
    data: [],
    count: 0,
    loading: false,
    limit: 5,
    offset: 0,
  });
  // fetch gifs
  const fetchData = useCallback(async () => {
    // setting initial state
    setTrending(prev => ({ ...prev, loading: true }));

    // get response data
    const { success, data, count, message } = await fetchGifsAction({
      offset: trending.offset,
      endpoint: 'trending',
      limit: trending.limit
    });
    // setting new state 
    if (success) {
      setTrending(prev => ({
        ...prev,
        data: [...prev.data, ...data],
        count,
        loading: false
      }))
    }
    // handle error message 
    if (!success) {
      alert(message)
      setTrending(prev => ({ ...prev, loading: false }))
    };
  }, [trending.offset])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {/* render gifs list component */}
      {trending.data && <GifsWrapper
        title='Trending'
        isLoading={trending.loading}
        // change offset to allow infinite scrolling
        changeOffset={() => setTrending(prev => ({
          ...prev,
          offset: trending.limit + trending.offset
        }))}
        data={trending.data}
      />}
    </>
  )
};

export default Trending;
