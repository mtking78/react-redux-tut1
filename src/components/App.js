import React from 'react';
import './App.css';
import Stories from './Stories';

// First, the App component, in the src/components/App.js file, receives the sample stories from above as props and its only responsibility is to render the Stories component and to pass over the stories as props. Later, the App component could add other components aside from the Stories component too.

const App = ({ stories, onArchive }) =>
  <div className="app">
    <Stories
      stories={stories}
      // The archiving function passes the App component:
      onArchive={onArchive}
    />
  </div>

export default App;