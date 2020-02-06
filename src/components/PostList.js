import React, { Component } from "react";

import "./PostList.css";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Flávio Pangrácio",
          avatar: "https://avatars3.githubusercontent.com/u/29132783?s=460&v=4"
        },
        date: "06 Fev 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Atualmente estamos em busca de Data Scientists para nos ajudar a entender os dados que coletamos"
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Saber fazer um bom café é um diferencial!"
          },
          {
            id: 4,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Coffee >>> all"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Diego Fernandes",
          avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
        },
        date: "02 Fev 2020",
        content: "Simples assim!",
        comments: [
          {
            id: 1,
            author: {
              name: "Flávio Pangrácio",
              avatar:
                "https://avatars3.githubusercontent.com/u/29132783?s=460&v=4"
            },
            content: "As vezes não é tão simples assim..."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="PostList">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
