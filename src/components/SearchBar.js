import React from 'react';



function SearchBar() {
    // const [searchValue, setSearchValue]=useState("");
    // const handleSearchValueChange = (event) =>{
    //     setSearchValue(event.target.value);
    // }

    return (
        <div>
            <input 
            className="searchBar-input"
            type="text"
            placeholder="Search a city"
            // value={searchValue}
            // onChange={handleSearchValueChange}
            />
            <button className="searchBar-button" >Search</button>
        </div>

    )

}

export default SearchBar;