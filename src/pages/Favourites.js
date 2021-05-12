import React from 'react'
import GifsWrapper from '../components/GifsWrapper'
import { STORAGE_KEY } from '../utilities/'

const Favourites = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY))

  return (
    <div>
      {data ?
        <GifsWrapper
          title='Favourites'
          data={data}
        /> :
        <h1
          className='text-center'
          style={{
            marginTop: '20px',
            fontSize: '20px'
          }}>You don't have any favourites yet!</h1>
      }
    </div>
  )
}
export default Favourites
