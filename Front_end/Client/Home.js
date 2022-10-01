import React, {useEffect, useState} from 'react';

import logo from '../logo.svg';
import '../App.css';

function Home() {


  const [greet, setGreet] = useState(null);

  useEffect(() => {
    fetch('/api/hello').then(res => res.json()).then(data => {
      setGreet(data.message);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p> 
          { !greet ? "Loading..." : greet }
        </p>

      </header>
    </div>
  );
}

export default Home;