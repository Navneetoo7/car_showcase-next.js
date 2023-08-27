import React,{useState} from 'react'
import { SearchManufacturer } from "./";

const SearchBar = () => {
    const [SearchManufacturer, setSearchManufacturer] = useState("")
    const handleSearch = () => {
        
    }
    return <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
        <SearchManufacturer/></div> 
  </form>;
}

export default SearchBar
