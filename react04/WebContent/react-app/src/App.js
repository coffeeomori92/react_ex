import React, { Component } from 'react';
import Subject from './components/Subject.js';
import TOC from './components/TOC.js';
import Content from './components/Content.js';
import './App.css';

class App extends Component {
	render(){
		return (
			<div className="App">
		      <Subject title = "WEB" sub = "World Wide Web!"></Subject>
		      <TOC></TOC>
		      <Content title = "HTML" desc = "HTML is ..."></Content>
		    </div>	
		);
	}
}

export default App;

/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello, React!!!
    </div>
  );
}

export default App;*/
