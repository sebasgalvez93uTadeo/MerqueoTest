import React from 'react';
import { mount } from 'enzyme';
import ListComments from '../../components/cardComment/ListComment';

describe('<ListComments />', () => {
  const author = "Sebastian Galvez";
  const date = "2021-06-06T14:01:44-05:00";
  const post = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quia mollitia alias.";
  const picture = "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg";
  const originalWarn = console.warn.bind(console.warn);
  beforeAll(() => {
    console.warn = (msg) => 
      !msg.toString().includes('componentWillReceiveProps') && originalWarn(msg);
  });
  afterAll(() => {
    console.warn = originalWarn
  });
  const listComment = mount(<ListComments picture={picture} author={author} date={date} post={post} />);
  test('Render del componente ListComments', () => {
    expect(listComment.length).toEqual(1);
  });
  test('Envio de props al componente', () => {
    expect(listComment.props().picture).toEqual(picture);
    expect(listComment.props().author).toEqual(author);
    expect(listComment.props().date).toEqual(date);
    expect(listComment.props().post).toEqual(post);
  });
});
