import React from 'react';
import SearchResults from './search'
const searchedPage = (props) => {
    return (
        <div>
            <SearchResults {...props}/>
        </div>
    );
}

export default searchedPage;