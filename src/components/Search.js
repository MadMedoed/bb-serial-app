import React, { useState } from 'react'

function Search(props) {
    const { 
        searchCharacter = Function.prototype 
    } = props;

    const [search, setSearch] = useState('');
    
    
    const handlekey = (event) => {
        if(event.key === 'Enter'){
            searchCharacter(search)
        }
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        searchCharacter(search)
    }

    return(
        <div className="row">
            <div className="input-field">
                <input 
                    placeholder="Character Name" 
                    type="text" 
                    className="search-input validate" 
                    onKeyDown={handlekey}
                    onChange={handleChange}
                />
            </div>
            <button className="btn" onClick={handleSearch}>Search</button>
        </div>
    )
}



export default Search;