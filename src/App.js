import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post
            nickname="Avi"
            avatar="https://scontent-yyz1-1.cdninstagram.com/vp/7b9dddd1cea6521ae7be34ef2f90388b/5D03868B/t51.2885-19/s320x320/19429576_102520130378340_6357794372636901376_a.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com"
            altText="Avi"
            caption="Hello World!"
            image="https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2018/europeslostf.jpg"
            />
          <Post nickname="Hugo"
          caption="Hi Back!"
          image="https://greatergood.berkeley.edu/images/uploads/Forest_in_Japan.jpg"
          avatar="https://tcdn.couchsurfing.com/LlfXa-GC0NTcX1C76_pZG_0r3Kw=/200x200/smart/https://s3.amazonaws.com/ht-images.couchsurfing.com/u/2258959/934fa9e7-d957-408d-9cb2-2dd1a5cd1063"
          altText="Hugo"
          />
        </div>
      </div>
    );
  }
}

export default App;
