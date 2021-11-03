import React from 'react';

interface Props {
    placeholder: string,

    onSearch: any
}

const SearchBox = ({ onSearch, placeholder }: Props) => (
  <div>
    <input type="text" placeholder={placeholder} onChange={onSearch} />
    <button type="submit"> search </button>
  </div>
);

export default SearchBox;
