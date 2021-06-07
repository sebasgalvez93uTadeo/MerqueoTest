import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import CardState from '../components/cardState/CardState.jsx';
import CardComment from '../components/cardComment/CardComment.jsx';
import Data from '../data/users.json';
import Posts from '../data/posts.json';

// Clase principal envia a App.js
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDataPosts: [],
      randomUser:[]
    }
  }
  componentDidMount() {
    this.sendDataLocalStorage();
  }
  sendDataLocalStorage = () => {
    // Seleccionar usuario de forma Random
    this.setState({ randomUser: Data.users[Math.floor(Math.random()*Data.users.length)]});
    const dataPost = Posts.data;
    // Envio de data para el localStorage
    if (localStorage.getItem('allData') === null) {
      localStorage.setItem('allData', JSON.stringify(dataPost));
    }
    // Se trae la data del campo de localStorage actualizada
    this.setState({ newDataPosts : JSON.parse(localStorage.getItem('allData'))});
  }
  getResponse = (newDataPosts) => {
    this.setState({ newDataPosts });
  }
  render() {
    // Recorrer arreglos iniciales
    const postsMap = this.state.newDataPosts.map((values, index) => (
      <CardComment
        key={index}
        id={values.id}
        picture={values.picture}
        author={values.author}
        date={values.date}
        post={values.post}
        like={values.reactions.like}
        comments={values.comments}
        newDataPosts={this.state.newDataPosts}
        randomUser={this.state.randomUser}
        callBack={this.getResponse}
      />
    ));
    return(
      <Fragment>
        <Header />
        <section className="main-section">
          <CardState
            newDataPosts={this.state.newDataPosts}
            randomUser={this.state.randomUser}
            callBack={this.getResponse}
            placeholder={'Escribe Aquí tu estado'}
          />
          {postsMap}
        </section>
      </Fragment>
    );
  }
}

export default HomePage;