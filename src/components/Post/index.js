import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
  render(){
    return(
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="https://scontent-yyz1-1.cdninstagram.com/vp/7b9dddd1cea6521ae7be34ef2f90388b/5D03868B/t51.2885-19/s320x320/19429576_102520130378340_6357794372636901376_a.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com" alt="Avi" />
            </div>
            <div className="Post-user-nickname">
              <span>Avi</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="Icon Living" src="http://lorempixel.com/output/abstract-q-c-640-480-7.jpg" />
          </div>
        </div>
        <div className="Post-caption">
          <strong>Avi</strong> Hello World!
        </div>
      </article>
    )
  }
}

export default Post;
