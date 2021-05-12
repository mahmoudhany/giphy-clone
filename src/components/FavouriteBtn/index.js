import { useEffect, useState } from 'react'
import { addToFavourites, isExist, removeFromFavourites } from '../../utilities'
import './favouriteBtn.scss'

export default function FavouriteBtn({ gif }) {
  const [exist, setExist] = useState(false)
  const onFavouriteBtnClicked = () => {
    // remove from favourites
    if (exist) {
      removeFromFavourites(gif.id)
      return setExist(false)
    }
    // add to favourites
    addToFavourites(gif)
    setExist(true)
  }

  // check if item is in favourites
  useEffect(() => {
    setExist(isExist(gif.id))
  }, [gif.id, exist])

  return (
    <div className='favouriteBtn'>
      <button onClick={onFavouriteBtnClicked}>
        <i className={`fas fa-heart ${exist ? 'faved' : 'not-faved'}`}
        ></i>
      </button>
    </div>
  )
}
