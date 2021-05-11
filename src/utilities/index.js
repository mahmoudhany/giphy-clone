export const addToFavorites = (gif) => {
  let favorites = []
  let localFavs = JSON.parse(localStorage.getItem('favorites'))
  favorites.push(gif)

  if (localFavs && localFavs.length > 0) {
    if (checkFavorite(gif.id) !== true) {
      localStorage.setItem('favorites', JSON.stringify([...localFavs, ...favorites]))
    }
  } else {
    localStorage.setItem('favorites', JSON.stringify([...favorites]))
  }
}

export const checkFavorite = (id) => {
  // 7yDthHaq2haXS
  let localFavs = JSON.parse(localStorage.getItem('favorites'))
  if (localFavs) {
    let inFavs = localFavs.filter(obj => obj['id'] === id).length > 0
    return inFavs
  }
}

export const removeFromFavorites = (id) => {
  let localFavs = JSON.parse(localStorage.getItem('favorites'))
  if (localFavs) {
    let newFavs = localFavs.filter(obj => obj['id'] !== id)
    localStorage.setItem('favorites', JSON.stringify(newFavs))
  }
}
