/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Card from '../../components/Card/Card';

describe('Test on <Card />', () => {
  const initialState = { id: 1 };

  const mockStore = configureStore();

  const body = 'This is a test';
  const id = 1;
  const userId = 1;
  const title = 'Test';

  const wrapper = shallow(
    <Provider store={mockStore(initialState)}>
      <Card body={body} id={id} userId={userId} title={title} />
    </Provider>,
  );

  test('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
