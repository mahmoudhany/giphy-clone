import React, { useCallback, useEffect, useState } from 'react'
import { fetchGifsAction } from '../API/api';
import GifsWrapper from '../components/GifsWrapper'

const Search = (props) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    limit: 5,
    offset: 0,
    keyword: props.match.params.q
  });

  // fetch gifs
  const fetchData = useCallback(async () => {
    // setting initial state
    setState(prev => ({ ...prev, loading: true }))
    // get response data
    const { success, data, message } = await fetchGifsAction({
      offset: state.offset,
      endpoint: 'search',
      keyword: props.match.params.q !== state.keyword ? props.match.params.q : state.keyword,
      limit: state.limit
    });

    // setting new state 
    if (success) {
      setState(prev => ({
        ...prev,
        data: props.match.params.q !== state.keyword ? data :
          [...state.data, ...data],
        loading: false,
        keyword: props.match.params.q !== state.keyword ?
          props.match.params.q : state.keyword
      })
      );
    }
    // handle error message 
    if (!success) {
      alert(message)
      setState(prev => ({ ...prev, loading: false }))
    };
  }, [state.offset, props.match.params.q]);

  useEffect(() => {
    fetchData();
  },
    [fetchData]);

  return (
    <>
      {/* render gifs list component safely */}
      {state.data && <GifsWrapper
        title={state.keyword}
        isLoading={state.loading}
        limit={state.limit}
        data={state.data}
        keyword={state.keyword}
        // change offset to allow infinite scrolling
        changeOffset={() => setState(prev => ({
          ...prev,
          offset: state.limit + state.offset
        }))}
      />}
    </>
  )
}

export default Search
