import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='sb'>
            <input className='input' type='search' onChange={searchChange} placeholder='search robots' />
        </div >
    )
}

export default SearchBox;