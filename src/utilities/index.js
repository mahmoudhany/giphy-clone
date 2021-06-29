export const STORAGE_KEY = 'favourites'

export const addToFavourites = (gif) => {
  const favourites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...favourites, gif]))
}

export const isExist = (id) => {
  let favourites = JSON.parse(localStorage.getItem(STORAGE_KEY))

  return favourites && favourites.filter(({ id: gId }) => gId === id).length > 0
}

export const removeFromFavourites = (id) => {
  let favourites = JSON.parse(localStorage.getItem(STORAGE_KEY))
  const favs = favourites.filter(({ id: gId }) => gId !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs))
}
