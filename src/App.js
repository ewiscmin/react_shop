import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webframe from './pagedraw/webframe';

class App extends Component {
  render() {
	      return <div className="my-own-div">
		              <Webframe />
		              <div>Other, unrelated content</div>
		          </div>;
  }
}

export default App;
