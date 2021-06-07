import React, { createRef } from 'react';
import nextId from "react-id-generator";

import './styles/style.scss';

class CardState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      randomUser: props.randomUser,
      newDataPosts: props.newDataPosts,
      buttonShow: false,
      comment: '',
    }
  }
  wrapperRef = createRef();
  componentDidMount() {
    document.addEventListener("mousedown", this.showButton);
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
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.showButton);
  }
  showButton = (event) => {
    if(event !== undefined) {
      if (this.wrapperRef.current && this.wrapperRef.current.contains(event.target)) {
        this.setState({
          buttonShow: true,
        });
      } 
    }
  }
  sendNewComment = (e) => {
    e.preventDefault();
    let date = new Date();
    const idGen = nextId();
    const newPost = {
      "id": idGen,
      "author": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
      "post": this.state.comment,
      "date": date,
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
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const newData = this.state.newDataPosts.concat(newPost);
      localStorage.setItem('allData', JSON.stringify(newData));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
      });
    });
    this.setState({
        buttonShow: false,
        comment: ''
    });
  }
  changeText = (e) => {
    this.setState({ comment: e.target.value });
  }
  render() {
    return (
      <div className={`container-cardState${this.state.buttonShow ? ' transition' : '' }`} >
        <form onSubmit={this.sendNewComment}>
          <input
            ref={this.wrapperRef}
              type="text"
              value={this.state.comment}
              className="addCommentInput"
              onClick={this.showButton}
              onChange={this.changeText}
              placeholder={this.props.placeholder}
              maxLength="255"
          />
          {this.state.buttonShow ? (
            <button type="submit">Publicar</button>
          ) : null}
        </form>
      </div>
    );
  }
}

export default CardState;