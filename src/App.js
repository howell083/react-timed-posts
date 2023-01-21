import React, { useState } from 'react';

import { AddThoughtForm } from './partials/AddThoughtForm';
import { Thought } from './partials/Thought';
import { generateId, getNewExpirationTime } from './partials/utilities';

import './App.css';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
    
  };
  const removeThought = (thoughtIdToRemove) => {
    
    setThoughts((thoughts) => thoughts.filter(thot => thot.id !== thoughtIdToRemove));
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>NOT-TWEETER</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <p>Your thoughts will disappear after 15s</p>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
