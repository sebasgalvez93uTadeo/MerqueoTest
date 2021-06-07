import React from 'react';
import nextId from "react-id-generator";

import Like from './images/iconLike.svg'
import Happy from './images/iconHappy.svg'
import Love from './images/iconInLove.svg'
import Crying from './images/iconCrying.svg'
import Sad from './images/iconSad.svg'
import Sceptic from './images/iconSceptic.svg'

import './styles/style.scss';


class SocialBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      newDataPosts: props.newDataPosts,
    }
  }
  sendLike = () => {
    const idGen = nextId();
    const newAction =  {
      "id": idGen,
      "name": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const filterAction = this.state.newDataPosts.filter(action => action.id === this.props.id);
      const actionsTempLike = filterAction[0].reactions.like.concat(newAction);
      const actionsTempHappy = filterAction[0].reactions.happy;
      const actionsTempLove = filterAction[0].reactions.love;
      const actionsTempSad = filterAction[0].reactions.sad;
      const actionsTempCry = filterAction[0].reactions.cry;
      const actionsTempThink = filterAction[0].reactions.think;
      const newObjectReaction = [{
        "id": filterAction[0].id,
        "author": filterAction[0].author,
        "picture": filterAction[0].picture,
        "post": filterAction[0].post,
        "date": filterAction[0].date,
        "reactions" : {
          "like": actionsTempLike,
          "happy": actionsTempHappy,
          "love": actionsTempLove,
          "sad": actionsTempSad,
          "cry": actionsTempCry,
          "think": actionsTempThink,
        },
        "comments": filterAction[0].comments
      }];
      // Funcionalidad para actualizar el arreglo de likes dentro de un post
      const concatData = newObjectReaction.concat(this.state.newDataPosts);
      const reverData = concatData.reverse();
      let reactionMap = reverData.map(item=>{
          return [item.id,item]
      });
      var reactionsMapArr = new Map(reactionMap);
      let unique = [...reactionsMapArr.values()];
      let orderReaction = unique.reverse();
      localStorage.setItem('allData', JSON.stringify(orderReaction));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
        this.props.showBox(false);
        this.props.reactionApply(true);
      });
    });
  }
  sendHappy = () => {
    const idGen = nextId();
    const newAction =  {
      "id": idGen,
      "name": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const filterAction = this.state.newDataPosts.filter(action => action.id === this.props.id);
      const actionsTempLike = filterAction[0].reactions.like;
      const actionsTempHappy = filterAction[0].reactions.happy.concat(newAction);
      const actionsTempLove = filterAction[0].reactions.love;
      const actionsTempSad = filterAction[0].reactions.sad;
      const actionsTempCry = filterAction[0].reactions.cry;
      const actionsTempThink = filterAction[0].reactions.think;
      const newObjectReaction = [{
        "id": filterAction[0].id,
        "author": filterAction[0].author,
        "picture": filterAction[0].picture,
        "post": filterAction[0].post,
        "date": filterAction[0].date,
        "reactions" : {
          "like": actionsTempLike,
          "happy": actionsTempHappy,
          "love": actionsTempLove,
          "sad": actionsTempSad,
          "cry": actionsTempCry,
          "think": actionsTempThink,
        },
        "comments": filterAction[0].comments
      }];
      // Funcionalidad para actualizar el arreglo de Happy dentro de un post
      const concatData = newObjectReaction.concat(this.state.newDataPosts);
      const reverData = concatData.reverse();
      let reactionMap = reverData.map(item=>{
          return [item.id,item]
      });
      var reactionsMapArr = new Map(reactionMap);
      let unique = [...reactionsMapArr.values()];
      let orderReaction = unique.reverse();
      localStorage.setItem('allData', JSON.stringify(orderReaction));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
        this.props.showBox(false);
      });
    });
  }
  sendLove = () => {
    const idGen = nextId();
    const newAction =  {
      "id": idGen,
      "name": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const filterAction = this.state.newDataPosts.filter(action => action.id === this.props.id);
      const actionsTempLike = filterAction[0].reactions.like;
      const actionsTempHappy = filterAction[0].reactions.happy;
      const actionsTempLove = filterAction[0].reactions.love.concat(newAction);
      const actionsTempSad = filterAction[0].reactions.sad;
      const actionsTempCry = filterAction[0].reactions.cry;
      const actionsTempThink = filterAction[0].reactions.think;
      const newObjectReaction = [{
        "id": filterAction[0].id,
        "author": filterAction[0].author,
        "picture": filterAction[0].picture,
        "post": filterAction[0].post,
        "date": filterAction[0].date,
        "reactions" : {
          "like": actionsTempLike,
          "happy": actionsTempHappy,
          "love": actionsTempLove,
          "sad": actionsTempSad,
          "cry": actionsTempCry,
          "think": actionsTempThink,
        },
        "comments": filterAction[0].comments
      }];
      // Funcionalidad para actualizar el arreglo de Love dentro de un post
      const concatData = newObjectReaction.concat(this.state.newDataPosts);
      const reverData = concatData.reverse();
      let reactionMap = reverData.map(item=>{
          return [item.id,item]
      });
      var reactionsMapArr = new Map(reactionMap);
      let unique = [...reactionsMapArr.values()];
      let orderReaction = unique.reverse();
      localStorage.setItem('allData', JSON.stringify(orderReaction));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
        this.props.showBox(false);
        // this.props.reactionApply(true);
      });
    });
  }
  sendCrying = () => {
    const idGen = nextId();
    const newAction =  {
      "id": idGen,
      "name": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const filterAction = this.state.newDataPosts.filter(action => action.id === this.props.id);
      const actionsTempLike = filterAction[0].reactions.like;
      const actionsTempHappy = filterAction[0].reactions.happy;
      const actionsTempLove = filterAction[0].reactions.love;
      const actionsTempSad = filterAction[0].reactions.sad.concat(newAction);
      const actionsTempCry = filterAction[0].reactions.cry;
      const actionsTempThink = filterAction[0].reactions.think;
      
      const newObjectReaction = [{
        "id": filterAction[0].id,
        "author": filterAction[0].author,
        "picture": filterAction[0].picture,
        "post": filterAction[0].post,
        "date": filterAction[0].date,
        "reactions" : {
          "like": actionsTempLike,
          "happy": actionsTempHappy,
          "love": actionsTempLove,
          "sad": actionsTempSad,
          "cry": actionsTempCry,
          "think": actionsTempThink,
        },
        "comments": filterAction[0].comments
      }];
      // Funcionalidad para actualizar el arreglo de likes dentro de un post
      const concatData = newObjectReaction.concat(this.state.newDataPosts);
      const reverData = concatData.reverse();
      let reactionMap = reverData.map(item=>{
          return [item.id,item]
      });
      var reactionsMapArr = new Map(reactionMap);
      let unique = [...reactionsMapArr.values()];
      let orderReaction = unique.reverse();
      localStorage.setItem('allData', JSON.stringify(orderReaction));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
        this.props.showBox(false);
      });
    });
  }
  sendSad = () => {
    const idGen = nextId();
    const newAction =  {
      "id": idGen,
      "name": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const filterAction = this.state.newDataPosts.filter(action => action.id === this.props.id);
      const actionsTempLike = filterAction[0].reactions.like;
      const actionsTempHappy = filterAction[0].reactions.happy;
      const actionsTempLove = filterAction[0].reactions.love;
      const actionsTempSad = filterAction[0].reactions.sad;
      const actionsTempCry = filterAction[0].reactions.cry.concat(newAction);
      const actionsTempThink = filterAction[0].reactions.think;
      const newObjectReaction = [{
        "id": filterAction[0].id,
        "author": filterAction[0].author,
        "picture": filterAction[0].picture,
        "post": filterAction[0].post,
        "date": filterAction[0].date,
        "reactions" : {
          "like": actionsTempLike,
          "happy": actionsTempHappy,
          "love": actionsTempLove,
          "sad": actionsTempSad,
          "cry": actionsTempCry,
          "think": actionsTempThink,
        },
        "comments": filterAction[0].comments
      }];
      // Funcionalidad para actualizar el arreglo de Sad dentro de un post
      const concatData = newObjectReaction.concat(this.state.newDataPosts);
      const reverData = concatData.reverse();
      let reactionMap = reverData.map(item=>{
          return [item.id,item]
      });
      var reactionsMapArr = new Map(reactionMap);
      let unique = [...reactionsMapArr.values()];
      let orderReaction = unique.reverse();
      localStorage.setItem('allData', JSON.stringify(orderReaction));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
        this.props.showBox(false);
      });
    });
  }
  sendSceptic = () => {
    const idGen = nextId();
    const newAction =  {
      "id": idGen,
      "name": this.props.randomUser.name,
      "picture": this.props.randomUser.picture,
    }
    this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
      const filterAction = this.state.newDataPosts.filter(action => action.id === this.props.id);
      const actionsTempLike = filterAction[0].reactions.like;
      const actionsTempHappy = filterAction[0].reactions.happy;
      const actionsTempLove = filterAction[0].reactions.love;
      const actionsTempSad = filterAction[0].reactions.sad;
      const actionsTempCry = filterAction[0].reactions.cry;
      const actionsTempThink = filterAction[0].reactions.think.concat(newAction);
      const newObjectReaction = [{
        "id": filterAction[0].id,
        "author": filterAction[0].author,
        "picture": filterAction[0].picture,
        "post": filterAction[0].post,
        "date": filterAction[0].date,
        "reactions" : {
          "like": actionsTempLike,
          "happy": actionsTempHappy,
          "love": actionsTempLove,
          "sad": actionsTempSad,
          "cry": actionsTempCry,
          "think": actionsTempThink,
        },
        "comments": filterAction[0].comments
      }];
      // Funcionalidad para actualizar el arreglo de Sceptic dentro de un post
      const concatData = newObjectReaction.concat(this.state.newDataPosts);
      const reverData = concatData.reverse();
      let reactionMap = reverData.map(item=>{
          return [item.id,item]
      });
      var reactionsMapArr = new Map(reactionMap);
      let unique = [...reactionsMapArr.values()];
      let orderReaction = unique.reverse();
      localStorage.setItem('allData', JSON.stringify(orderReaction));
      this.setState({ newDataPosts: JSON.parse(localStorage.getItem('allData')) }, () => {
        this.updatePosts();
        this.props.showBox(false);
      });
    });
  }
  updatePosts = () => {
    this.props.callBack(this.state.newDataPosts);
  }
  render () {
    return(
      <div className="container-socialBar">
        <div>
          <img onClick={this.sendLike} src={Like} alt="icon like" />
        </div>
        <div>
          <img onClick={this.sendHappy} src={Happy} alt="icon like" />
        </div>
        <div>
          <img onClick={this.sendLove} src={Love} alt="icon like" />
        </div>
        <div>
          <img onClick={this.sendCrying} src={Crying} alt="icon like" />
        </div>
        <div>
          <img onClick={this.sendSad} src={Sad} alt="icon like" />
        </div>
        <div>
          <img onClick={this.sendSceptic} src={Sceptic} alt="icon like" />
        </div>
      </div>
    );
  }
}

export default SocialBar;
