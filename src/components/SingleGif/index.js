import React, { useCallback, useEffect, useState } from 'react'
import { fetchSingleGif } from '../../API/api';
import Loading from '../Loading'
import instgramLogo from '../../assets/instagram.png'
import './singleGif.scss'
import { addToFavorites, checkFavorite, removeFromFavorites } from '../../utilities';

const SingleGif = (props) => {

  let gifID = props.match.params.id
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const [inFavorites, setInFavorites] = useState(false)

  const fetchGif = useCallback(async () => {
    setLoading(true)
    const gif = await fetchSingleGif(gifID)
    if (Object.entries(gif).length !== 0) {
      setState(gif)
      setLoading(false)
    }
  }, [gifID])

  useEffect(() => {
    fetchGif()
  }, [fetchGif])

  // check if gif is in favorites
  useEffect(() => {
    setInFavorites(checkFavorite(gifID))
  }, [gifID, inFavorites])

  return (
    <div className="container position-relative">
      <div className='single-gif'>
        <div className="row">
          {!loading && <>
            <div className='col-12 col-md-6 col-lg-3 left'>
              {state?.user ?
                <>
                  <div className="user">
                    <img src={state.user?.avatar_url} alt={state?.username} />
                    <div className='name'>
                      <p className="display-name">{state.user?.display_name}</p>
                      <a
                        className="username"
                        href={state.user?.profile_url}
                        rel='noopener noreferrer'
                        target='_blank'
                      >@{state?.username}</a>
                    </div>
                  </div>
                  <div className="description">
                    <p>{state.user?.description}</p>
                  </div>
                  {state.user?.instagram_url &&
                    <div className="follow">
                      <p>Follow on: </p>
                      <a href={state.user?.instagram_url} rel='noopener noreferrer' target='_blank' >
                        <img src={instgramLogo} alt="instgram" />
                      </a>
                    </div>
                  }
                </> :
                <p className='ananymous'>Ananymous user</p>
              }
            </div>

            <div className='col-12 col-md-12 col-lg-6 middle'>
              <h2 className='title'>{state?.title}</h2>
              {state.images?.downsized_medium.url ?
                <div className="gif">
                  <img
                    src={state.images?.downsized_medium.url} alt={state?.title} />
                </div> :
                <Loading />
              }
            </div>

            <div className='col-12 col-md-6 col-lg-3 right'>
              <div className='favorite'>
                <button onClick={() => {
                  if (inFavorites) {
                    removeFromFavorites(gifID)
                    setInFavorites(false)
                  } else {
                    addToFavorites(state)
                    setInFavorites(true)
                  }
                }}>
                  <i className={`fas fa-heart ${inFavorites ? 'faved' : 'not-faved'}`}
                  ></i>
                  <span>Favorite</span>
                </button>
              </div>
              <p className='date'>Uploaded At: <span>{state.import_datetime}</span></p>
              <p className='rating'>Rating: <span>{state.rating}</span></p>
            </div>
          </>
          }
        </div>
      </div>
    </div>
  )
}
export default SingleGif
