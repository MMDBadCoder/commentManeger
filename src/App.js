import React from 'react';
import CommentManager from './CommentComponens/CommentManager'
import './App.css';



function App() {
  return (

    <CommentManager comments={data.comments} title={data.title} />
  );
}

export default App;


const data = {
  comments: [
    {
      head: {
        liked : true,
        id: "123",
        writer: {
          address: 'google.com',
          name: 'mohammad',
          imgSrc: "mmd.img",
        },
        can_edit: true,
        edit: true,
        like_count: 23,
        date: '20 minute ago',
      },
      content: {
        text: "content1\n hello mmd I'm ali\n all were well",
      },
      replys: [

      ],
    },
    {
      head: {
        liked : false,
        id: "123",
        writer: {
          address: 'google.com',
          name: 'mohammad',
          imgSrc: "mmd.img",
        },
        edit: false,
        like_count: 23,
        date: '20 minute ago',
      },
      content: {
        text: "content2\n goodmorning",
      },
      replys: [
        {
          head: {
            id: "123",
            writer: {
              address: 'google.com',
              name: 'mohammad',
              imgSrc: "mmd.img",
              can_edit: true,
            },
            edit: false,
            like_count: 23,
            date: '20 minute ago',
          },
          content: {
            text: "text3",
          },
          replys: [

          ],
        },

      ],
    },
  ],
  title: "hello"

}