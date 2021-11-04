/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';

import SearchBox from '../../components/SearchBox/SearchBox';

describe('Test on <SearchBox />', () => {
  const onSearch = jest.fn();
  const placeholder = 'Search';

  const wrapper = shallow(
    <SearchBox onSearch={onSearch} placeholder={placeholder} />,
  );

  test('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
