import React from 'react';
import { mount } from 'enzyme';
import SocialBar from '../../components/socialBar/SocialBar';

describe('<SocialBar />', () => {
  const randomUser = {
    "id": 1,
    "name": "Camila Parra",
    "picture": "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg"
  };
  const newDataPosts = {
    "id": 2,
    "author": "Sebastian Galvez",
    "picture": "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
    "post": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quia mollitia alias.",
    "date": "2021-06-06T14:01:44-05:00",
    "reactions": {
      "like": [],
      "happy": [],
      "love": [],
      "sad": [],
      "cry": [],
      "think": []
    },
    "comments": [
    ]
  };
  const id = 2;
  const showBox = true;
  const originalWarn = console.warn.bind(console.warn);
  beforeAll(() => {
    console.warn = (msg) => 
      !msg.toString().includes('componentWillReceiveProps') && originalWarn(msg);
  });
  afterAll(() => {
    console.warn = originalWarn
  });
  const socialBar = mount(<SocialBar id={id} randomUser={randomUser} newDataPosts={newDataPosts} showBox={showBox} />);
  test('Render del componente SocialBar', () => {
    expect(socialBar.length).toEqual(1);
  });
  test('Envio de props al componente', () => {
    expect(socialBar.props().id).toEqual(id);
    expect(socialBar.props().randomUser).toEqual(randomUser);
    expect(socialBar.props().newDataPosts).toEqual(newDataPosts);
    expect(socialBar.props().showBox).toEqual(showBox);
  });
});