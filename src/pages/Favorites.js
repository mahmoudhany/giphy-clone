import React from 'react'
import GifsWrapper from '../components/GifsWrapper'

const Favorites = () => {
  const data = JSON.parse(localStorage.getItem('favorites'))
  return (
    <div>
      {data ?
        <GifsWrapper
          title='Favorites'
          data={data}
        /> :
        <h1 className='text-center' style={{
          marginTop: '20px',
          fontSize: '20px'
        }}>You don't have any favorites yet!</h1>
      }
    </div>
  )
}
export default Favorites
