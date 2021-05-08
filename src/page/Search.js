import React from 'react'
import GifsWrapper from '../components/GifsWrapper'

export default function Search(props) {
  return (
    <>
      {console.log(props.match.params.q)}
      <GifsWrapper
        endpoint='search'
        limit={2}
        offset={0}
        keyword={props.match.params.q}
      />
    </>
  )
}
