import { useEffect, useState } from 'react'
import { addToFavourites, checkFavourite, removeFromFavourites } from '../../utilities'
import './favouriteBtn.scss'

export default function FavouriteBtn({ gif }) {

  const [inFavourites, setInFavourites] = useState(false)
  const onFavouriteBtnClicked = () => {
    if (inFavourites) {
      // remove from favourites
      removeFromFavourites(gif.id)
      setInFavourites(false)
    } else {
      // add to favourites
      addToFavourites(gif)
      setInFavourites(true)
    }
  }

  // check if item is in favourites
  useEffect(() => {
    setInFavourites(checkFavourite(gif.id))
  }, [gif.id, inFavourites])

  return (
    <div className='favouriteBtn'>
      <button onClick={onFavouriteBtnClicked}>
        <i className={`fas fa-heart ${inFavourites ? 'faved' : 'not-faved'}`}
        ></i>
      </button>
    </div>
  )
}
