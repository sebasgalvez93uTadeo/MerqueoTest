import React, { Fragment } from 'react';
import moment from "moment";
import 'moment/locale/es';
import ListComments from './ListComment';
import NewComment from './NewComment';
import SocialBar from '../socialBar/SocialBar';
import './styles/style.scss';
import iconLike from './images/iconLike.svg';

class CardComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      picture: props.picture,
      author: props.author,
      date: props.date,
      post: props.post,
      like: props.like,
      comments: props.comments,
      newDataPosts: props.newDataPosts,
      randomUser: props.randomUser,
      showAddComments: false,
      showComments: false,
      showSocialBar: false,
      reactionActive: false,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newDataPosts !== this.props.newDataPosts) {
      this.setState({
        newDataPosts: nextProps.newDataPosts,
      }, () => {
        this.updatePosts();
      });
    }
    if (nextProps.comments !== this.props.comments) {
      this.setState({
        comments: nextProps.comments,
      }, () => {
        this.updatePosts();
      });
    }
    if (nextProps.like !== this.props.like) {
      this.setState({
        like: nextProps.like,
      }, () => {
        this.updatePosts();
      });
    }
  }
  updatePosts = () => {
    this.props.callBack(this.state.newDataPosts);
  }
  // funcion para mostrar la caja de agregar comentarios
  showAddComments = () => {
    if (!this.state.showAddComments) {
      this.setState({ showAddComments: true, showComments: false, showSocialBar: false });
    } else {
      this.setState({ showAddComments: false, showComments: false, showSocialBar: false });
    }
  }
  // funcion para mostrar la caja de comentarios
  showComments = () => {
    if (!this.state.showComments) {
      this.setState({ showComments: true, showAddComments: false, showSocialBar: false });
    } else {
      this.setState({ showComments: false, showAddComments: false, showSocialBar: false });
    }
  }
  showSocialBarF = () => {
    if (!this.state.showSocialBar) {
      this.setState({ showSocialBar: true, showComments: false, showAddComments: false });
    } else {
      this.setState({ showSocialBar: false, showComments: false, showAddComments: false });
    }
  }
  reactionApply = () => {
    this.setState({ reactionActive: true });
  }
  render() {
    // Recorrer el arreglo de comentarios en los comentarios
    const commentsMap = this.state.comments.map((values, index) => (
      <ListComments 
        key={index}
        picture={values.picture}
        author={values.author}
        post={values.post}
        date={values.date}
      />
    ));
    // Recorrer el arreglo de likes para mostrar los tres primeros
    if (this.state.like !== undefined) {
      const threeLikes = this.state.like.slice(0, 3);
      var likesMap = threeLikes.map((values, index) => (
        <Fragment key={index}>
          <img className="container-reactions__circle" src={values.picture} alt="icon profile user" />
        </Fragment>
      ));
    }
    return (
      <Fragment>
        <div className="container-cardComment">
          <div className="container-cardComment__comment">
            <img className="container-cardComment__profile" src={this.state.picture} alt="icon profile" />
            <div className="container-info">
              <h2 className="container-info__name">{this.state.author}</h2>
              <span className="container-info__time">{moment(this.state.date).fromNow()}</span>
              <span className="container-info__comment">{this.state.post}</span>
            </div>
          </div>
          <div className="container-reactions">
            {likesMap}
            <div className="container-textReactions">
              {this.state.like.length !== 0 ? (<span className="container-reactions__interaction">{this.state.like.length} Likes</span>) : <span style={{marginLeft: -10}} className="container-reactions__interaction">No tienes likes</span>}
              {this.state.comments.length !== 0 ? (
                this.state.comments.length === 1 ? (
                  <div onClick={this.showComments} className="container-reactions__interaction">{this.state.comments.length} Comentario</div>
                ): (<div onClick={this.showComments} className="container-reactions__interaction">{this.state.comments.length} Comentarios</div>)
              ) : null}
            </div>
          </div>
          <div className="container-separator"></div>
          {this.state.showSocialBar ? (
            <SocialBar 
              id={this.state.id}
              newDataPosts={this.state.newDataPosts}
              randomUser={this.props.randomUser}
              callBack={this.props.callBack}
              showBox={this.showSocialBarF}
              reactionApply={this.reactionApply}
            />
          ) : null }
          <div className="container-actions">
            {!this.state.reactionActive ? (
              <div onClick={this.showSocialBarF} className="container-actions__react">Reaccionar</div>
            ) : (<div className="container-actions__reactActive"><img src={iconLike} alt="icon like" />Me gusta</div>) }
            <div onClick={this.showAddComments} className="container-actions__comment">Comentar</div>
          </div>
        </div>
        {/* Validacion para saber cual caja mostrar (addNewComment or viewComments) */}
        <div className={`container-addComment${this.state.showAddComments ? ' transition' : '' }`} >
          {this.state.showAddComments ? (
            <NewComment
              id={this.state.id}
              newDataPosts={this.state.newDataPosts}
              randomUser={this.props.randomUser}
              callBack={this.props.callBack}
              showBox={this.showAddComments}
            />
            ) : null}
          </div>
        <div className={`container-addComment${this.state.showComments ? ' transitionShow' : '' }`} >
          {this.state.showComments ? (
            commentsMap
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default CardComment;
