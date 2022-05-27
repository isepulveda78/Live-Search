import React, { useState } from 'react'
import "./SearchBar.css"

export default function SearchBar ({placeholder, data}){
  const [filteredData, setFilteredData ] = useState([])
  const [wordEntered, setWordEntered ] = useState('')
  
  const handleFilter = (e) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if(searchWord === ""){
      setFilteredData([])
    }else{
      setFilteredData(newFilter)
    }
    
  }
  const clearInput = () => {
      setFilteredData([])
      setWordEntered('')
  }
  return (
      <div className="search">
        <div className="searchInputs">
          
          <input type="text" 
            placeholder={placeholder}
            onChange={handleFilter}
            value={wordEntered}
            />
          <div className="searchIcon">
            {
            filteredData.length === 0 ? <span>&#x1F50D;</span> : <span id='clearBtn' onClick={clearInput}>✖</span> 
            }
          </div>
          </div>
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a href={value.link} className="dataItem" target="_blank">
               <p>{value.title}</p>
              </a>
              )
          })}
        </div>
        
        )}
      </div>
  )
}