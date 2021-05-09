import React from 'react'
import GifsWrapper from '../components/GifsWrapper'

export default function Search(props) {
  return (
    <>
      <GifsWrapper
        endpoint='search'
        limit={10}
        keyword={props.match.params.q}
      />
    </>
  )
}
