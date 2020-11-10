import React from 'react';

import online from '../../assets/Icons/online.png';

import './style/TextContainer.css';

export const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat<span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={online}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);