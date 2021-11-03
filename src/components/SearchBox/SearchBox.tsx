import React from 'react';

import './SearchBox.css';

interface Props {
    placeholder: string,

    onSearch: any
}

const SearchBox = ({ onSearch, placeholder }: Props) => (
  <div>
    <input className="search-bar" type="text" placeholder={placeholder} onChange={onSearch} />
  </div>
);

export default SearchBox;
