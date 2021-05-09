import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './header.scss'

export default function Header(props) {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()

  const onChange = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value.trim())
  }
  const onSearchClicked = () => {
    if (searchValue) {
      setSearchValue('')
      history.push(`/search/${searchValue}`)
    }
  }
  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchClicked()
    }
  }
  return (
    <div className='header'>
      <nav>
        <Link to='/' className='container logo d-block'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Giphy-logo.svg" alt="Fatura-gifs"
          />
        </Link>
      </nav>
      <div className="content">
        <div className="input-wrapper">
          <input
            type="text"
            className="form-control-plaintext"
            placeholder='Search keyword'
            onChange={onChange}
            value={searchValue}
            onKeyDown={handleEnterKeyDown}
          />
          <button
            className="btn btn-primary"
            onClick={onSearchClicked}
          >Search</button>
        </div>
      </div>
    </div >
  )
}
