import React from 'react';
import { mount } from 'enzyme';
import CardState from '../../components/cardState/CardState';

describe('<CardState />', () => {
  const placeholder = 'Escribe Aquí tu estado';
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
  const originalWarn = console.warn.bind(console.warn);
  beforeAll(() => {
    console.warn = (msg) => 
      !msg.toString().includes('componentWillReceiveProps') && originalWarn(msg);
  });
  afterAll(() => {
    console.warn = originalWarn
  });
  const cardState = mount(<CardState placeholder={placeholder} randomUser={randomUser} newDataPosts={newDataPosts}/>);
  test('Render del componente CardState', () => {
    expect(cardState.length).toEqual(1);
  });
  test('Envio de props al componente', () => {
    expect(cardState.props().placeholder).toEqual(placeholder);
    expect(cardState.props().randomUser).toEqual(randomUser);
    expect(cardState.props().newDataPosts).toEqual(newDataPosts);
  });
  test('prueba del boton oculto de envio de comentario hasta el tap al input', () => {
    expect(cardState.find('button')).toHaveLength(0);
  });
});
