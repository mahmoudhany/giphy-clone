export const STORAGE_KEY = 'favourites'

export const addToFavourites = (gif) => {
  let favourites = []
  let localFavs = JSON.parse(localStorage.getItem(STORAGE_KEY))
  favourites.push(gif)

  if (localFavs && localFavs.length > 0) {
    if (checkFavourite(gif.id) !== true) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...localFavs, ...favourites]))
    }
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favourites]))
  }
}

export const checkFavourite = (id) => {
  let localFavs = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (localFavs) {
    let inFavs = localFavs.filter(obj => obj['id'] === id).length > 0
    return inFavs
  }
}

export const removeFromFavourites = (id) => {
  let localFavs = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (localFavs) {
    let newFavs = localFavs.filter(obj => obj['id'] !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavs))
  }
}
