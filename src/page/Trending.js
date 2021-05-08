import React from 'react'
import GifsWrapper from '../components/GifsWrapper'

export default function Trending() {
  return (
    <>
      <GifsWrapper
        endpoint='trending'
        limit={10}
        offset={0}
        keyword='Trending'
      />
    </>
  )
}
