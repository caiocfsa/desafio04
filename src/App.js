import React, { Component } from 'react';

import './Global.css';

import Header from './components/Header';
import PostList from './components/PostList';

class App extends Component {
  render(){
    return (
      <div className="app">
        <Header />
        <PostList />
      </div>
    );
  }
}

export default App;