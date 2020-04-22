import React, { Component } from 'react';
/* import Lecture from './Lecture/Lecture';
import MapMethod from './Lecture/MapMethod.js'; */
import Post from './Post/Post.js';

const posts = [
  {
    id:1,
    title: "Prow scuttle parrel provost ", 
    author: "Cap'n ScurvyBeard",
    desc: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.",
    img: "https://source.unsplash.com/RYfZxZwnPas"
  },
  {
    id:2,
    title: "Sail ho shrouds spirits", 
    author: "Capt. Hikari",
    desc: "Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    img: "https://source.unsplash.com/NbgQfUvKFE0"

  },
  {
    id:3,
    title: "Aboom mizzenmast yardar" ,
    author: "Kat Truewalker - Defender of the Code",
    desc: "Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm.",
    img: "https://source.unsplash.com/0FQneB1VjaM"

  }

];


class App extends Component {
  state = {
    posts: posts,
    likes: 0
  };

  addLikes = () => {
    this.setState({
      likes:this.state.likes +1
    })
  };

  removeHandler = removeId => {
    const oldPosts = [...this.state.posts];
    oldPosts.splice(removeId, 1);
    this.setState({posts: oldPosts});
  }
  render() {

    const postsList = this.state.posts.map((post, index) => {
     
      return (
     
        <Post 
        key={post.id}
        title={post.title} 
        author={post.author} 
        desc={post.desc} 
        img={post.img}
        closeclick={this.removeHandler.bind(this, index)}
        /* likeclick={this.addLikes}
        likes={this.state.likes} *//>      
      )
    });

    return <div className="card-container">{postsList}</div>;
  }
}

export default App;
