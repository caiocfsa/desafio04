import React from 'react';

import Comment from './Comment';

import './Post.css';

export default function Post({ post }){
    return (
      <div className="Post">
        <div className="user">
          <img className="Avatar" src={post.author.avatar} />
          <div className="Name">
            {post.author.name}
            <span className="date">
              {post.date}
            </span>
          </div>
        </div>
        <p className="content">
          {post.content}
        </p>
        <div className="line"></div>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment}/>
        ))}
      </div>
    );
}
