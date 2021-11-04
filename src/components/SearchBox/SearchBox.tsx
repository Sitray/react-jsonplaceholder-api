import React from 'react';

import './SearchBox.css';

interface Props {
    placeholder: string,
    // eslint-disable-next-line no-unused-vars
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ onSearch, placeholder }: Props) => (
  <div>
    <input name="inputSearch" className="search-bar" type="text" placeholder={placeholder} onChange={onSearch} />
  </div>
);

export default SearchBox;
