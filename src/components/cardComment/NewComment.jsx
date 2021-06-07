import React, { Fragment } from 'react';
import nextId from "react-id-generator";

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      newDataPosts: props.newDataPosts,
      comment: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newDataPosts !== this.props.newDataPosts) {
      this.setState({
        newDataPosts: nextProps.newDataPosts,
      });
    }
  }
  updatePosts = () => {
    this.props.callBack(this.state.newDataPosts);
  }
  changeText = (e) => {
    this.setState({ comment: e.target.value });
  }
  sendNewComment = (e) => {
    e.preventDefault();
    let date = new Date();
    const idGen = nextId();
    const newComment = {
      "id": idGen,
      "author": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
      "post": this.state.comment,
      "date": date,
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const filterPost = this.state.newDataPosts.filter(post => post.id === this.state.id);
      const commentsTemp = filterPost[0].comments.concat(newComment);
      const newObjectComment = [{
        "id": filterPost[0].id,
        "author": filterPost[0].author,
        "picture": filterPost[0].picture,
        "post": filterPost[0].post,
        "date": filterPost[0].date,
        "reactions": filterPost[0].reactions,
        "comments": commentsTemp
      }];
      // Funcionalidad para actualizar el arreglo de comentarios dentro de un post
      const concatData = newObjectComment.concat(this.state.newDataPosts);
      const reverData = concatData.reverse();
      let commentsMap = reverData.map(item=>{
          return [item.id,item]
      });
      var commentsMapArr = new Map(commentsMap);
      let unique = [...commentsMapArr.values()];
      let orderComment = unique.reverse();
      localStorage.setItem('allData', JSON.stringify(orderComment));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
        this.props.showBox(false);
      });
    });
    this.setState({
        buttonShow: false,
        comment: ''
    });
  }
  render () {
    return(
      <Fragment>
        <form onSubmit={this.sendNewComment}>
          <input
            type="text"
            value={this.state.comment}
            className="addCommentInput"
            onChange={this.changeText}
            placeholder="Escribe un comentario"
            maxLength="255"
          />
          <button type="submit">Publicar</button>
        </form>
      </Fragment>
    );
  }
}
  
  export default NewComment;
  