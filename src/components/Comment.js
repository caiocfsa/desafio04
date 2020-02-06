import React from 'react';

import './Comment.css';

export default function Comment({ comment }) {
  return (
    <div className="commentGroup">
      {console.log(comment)}
      <img key={comment.id} src={comment.author.avatar} className="Avatar"/>
      <div className="boxComment">
        <p className="contentComment">
          <span className="nameComment">
            {comment.author.name}
          </span>
          {comment.content}
        </p>
      </div>
    </div>
  );
}
