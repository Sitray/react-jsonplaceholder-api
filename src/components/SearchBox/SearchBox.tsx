/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './SearchBox.css';

interface Props {
    placeholder: string,
    // eslint-disable-next-line no-unused-vars
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ onSearch, placeholder }: Props) => (
  <nav>
    <ul>
      <li><a href="#">Index</a></li>
      <li><a href="#">Nosotros</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contáctanos</a></li>
      <li>
        <input name="inputSearch" className="search-bar" type="text" placeholder={placeholder} onChange={onSearch} />
      </li>
    </ul>
  </nav>
);

export default SearchBox;
