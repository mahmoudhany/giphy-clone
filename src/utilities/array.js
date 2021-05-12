const isExist = (arr = [], id) => {
  return arr.filter(({ id: gId }) => gId === id).length !== 0;
};

export const getUniqueGifs = (arr = []) => {
  if (arr.length > 0) {
    return arr.reduce((array, item) => {
      if (!isExist(array, item.id)) return array.concat(item);
      return array
    }, []);
  }
}
