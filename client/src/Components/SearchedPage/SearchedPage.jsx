import React from 'react';
import SearchResults from './SearchResults/SearchResults'
const searchedPage = (props) => {
    return (
        <div>
            <SearchResults {...props}/>
        </div>
    );
}

export default searchedPage;