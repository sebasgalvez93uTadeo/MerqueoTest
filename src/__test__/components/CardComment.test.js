import React from 'react';
import { mount } from 'enzyme';
import CardComment from '../../components/cardComment/CardComment';

describe('<CardComment />', () => {
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
  const author = "Sebastian Galvez";
  const date = "2021-06-06T14:01:44-05:00";
  const post = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quia mollitia alias.";
  const comments = [{
    "id": 1,
    "author": "Carolina Angarita",
    "picture": "https://cdn.pixabay.com/photo/2018/01/24/19/49/people-3104635_960_720.jpg",
    "post": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deserunt quia mollitia alias.",
    "date": "2021-06-07T14:01:44-05:00"
  }];
  const picture = "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg";
  const like = [{
    "id": 1,
    "name": "Camila Parra",
    "picture": "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg"
  }];
  const originalWarn = console.warn.bind(console.warn);
  beforeAll(() => {
    console.warn = (msg) => 
      !msg.toString().includes('componentWillReceiveProps') && originalWarn(msg);
  });
  afterAll(() => {
    console.warn = originalWarn
  });
  
  const cardComment = mount(<CardComment id={id} picture={picture} author={author} date={date} post={post} comments={comments} like={like} randomUser={randomUser} newDataPosts={newDataPosts} />);
  test('Render del componente CardComment', () => {
    expect(cardComment.length).toEqual(1);
  });
  test('Envio de props al componente', () => {
    expect(cardComment.props().id).toEqual(id);
    expect(cardComment.props().picture).toEqual(picture);
    expect(cardComment.props().author).toEqual(author);
    expect(cardComment.props().date).toEqual(date);
    expect(cardComment.props().post).toEqual(post);
    expect(cardComment.props().comments).toEqual(comments);
    expect(cardComment.props().like).toEqual(like);
    expect(cardComment.props().randomUser).toEqual(randomUser);
    expect(cardComment.props().newDataPosts).toEqual(newDataPosts);
  });
});
