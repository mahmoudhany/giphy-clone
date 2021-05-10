import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './header.scss'

export default function Header(props) {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()

  // listen to search input change
  const onChange = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value.trim())
  }

  // listen to submitting search value
  const onSearchClicked = () => {
    // simple check for input value
    if (searchValue) {
      setSearchValue('')
      history.push(`/search/${searchValue}`)
    }
  }
  // {accessability feature } using keyboard to trigger search
  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchClicked()
    }
  }
  return (
    <div className='header'>
      <nav
        className='navbar navbar-light bg-light'>
        <div className="container">
          <Link to='/' className='navbar-brand logo'>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Giphy-logo.svg" alt="Fatura-gifs"
            />
          </Link>
        </div>
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
