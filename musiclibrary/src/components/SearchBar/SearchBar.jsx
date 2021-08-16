import React from 'react';

const SearchBar = (props) => {
    return(
        <div>
            <hr />
            <h2>Search</h2>
                <div className='col-md-4'>
                    <label>Search:</label>
                    <input onChange={props.handleInput} type ="text"/>
                </div>
        </div>
    )
}

export default SearchBar