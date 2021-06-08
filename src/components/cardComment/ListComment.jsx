import React from 'react';
import moment from "moment";
import 'moment/locale/es';

class ListComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: props.picture,
      author: props.author,
      post: props.post,
      date: props.date,
    }
  }
  render() {
    return(
      <div className="container-cardComment__comment">
        <img className="container-cardComment__profileComment" src={this.state.picture} alt="icon profile" />
        <div className="container-info">
          <h2 className="container-info__nameComment">{this.state.author}</h2>
          <span className="container-info__commentInComent">{this.state.post}</span>
          <span className="container-info__timeComment">{moment(this.state.date).fromNow()}</span>
        </div>
      </div>
    );
  }
}

export default ListComments;