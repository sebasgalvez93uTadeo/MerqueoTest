import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/header/Header';

describe('<Header />', () => {
  const header = mount(<Header />);
  test('Render del componente Footer', () => {
    expect(header.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(header.find('#titleMerqueo').text()).toEqual('Merqueo Test');
  });
});
describe('Header Snapshot', () => {
  test('Comprobar UI del componente Header', () =>{
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});