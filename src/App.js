import React, { Component } from 'react';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="intro">
            <h1>Hi, I'm <span>Alex</span>. I write <span>code</span> and stuff.</h1>
          </div>

          <div className="contact">
            <button>
              <a href="http://github.com/alexako/" target="_blank">
                <i className="fa fa-github fa-4x" aria-hidden="true"></i>
              </a>
            </button>
            <button>
              <a href="http://twitter.com/kludgebot/" target="_blank">
                <i className="fa fa-twitter fa-4x" aria-hidden="true"></i>
              </a>
            </button>
            <button id="modalBtn" className="copyEmail" data-clipboard-text="me@alexjreyes.com">
              <i className="fa fa-envelope fa-4x" aria-hidden="true"></i>
            </button>
          </div>

          <div id="arrow">
            <a href="#portfolio">
              <i className="fa fa-arrow-circle-down fa-4x" aria-hidden="true"></i>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
