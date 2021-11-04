/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CardContainer from '../../components/CardContainer/CardContainer';

describe('test on <CardContainer />', () => {
  const initialState = { id: 1 };
  const mockStore = configureStore();
  const wrapper = shallow(
    <Provider store={mockStore(initialState)}>
      <CardContainer />
    </Provider>,
  );

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('login should not exists ', () => {
    expect(wrapper.find('p').exists()).toBe(false);
  });
});
