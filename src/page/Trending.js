import React, { useEffect, useState } from 'react'
import GifsWrapper from '../components/GifsWrapper'

export default function Trending() {
  // const [mounted, setMounted] = useState(true);
  // useEffect(() => {
  //   setMounted(false)
  //   return () => {
  //     setMounted(true)
  //   }
  // }, [])
  return (
    // mounted &&
    <>
      <GifsWrapper
        endpoint='trending'
        title='Trending'
        limit={10}
      />
    </>
  )
}
