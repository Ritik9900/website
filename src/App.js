import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm <strong>Ritik Ranjan</strong>, a passionate developer.
        </p>
        <div className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/your-github-username/project1">Project 1</a>
              <p>Short description of project 1.</p>
            </li>
            <li>
              <a href="https://github.com/your-github-username/project2">Project 2</a>
              <p>Short description of project 2.</p>
            </li>
          </ul>
        </div>
        <footer>
          <p>
            Connect with me on{' '}
            <a href="https://linkedin.com/in/your-profile">LinkedIn</a> or{' '}
            <a href="https://github.com/your-github-username">GitHub</a>.
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
