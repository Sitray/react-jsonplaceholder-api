/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import Enzyme from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';

// eslint-disable-next-line import/no-unresolved
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
// @ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
