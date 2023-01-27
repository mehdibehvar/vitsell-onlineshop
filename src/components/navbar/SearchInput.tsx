import React from 'react'
import Button from '../common/button/Button'
import { SearchIcon } from '../icons/icons'

const SearchInput = () => {
  return (
    <form className="search">
    <input className="search_input d-none d-sm-block" placeholder="جستجوی محصولات..."/>
    <input className="search_input d-block d-sm-none" placeholder="جستجوی ..."/>
      <Button className="search_button" type="submit">
        <SearchIcon />
      </Button>
    </form>
  )
}

export default SearchInput