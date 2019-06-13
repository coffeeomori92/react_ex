import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// JavaScript 최신 스펙, class 안에서는 function 생략
class Subject extends Component {
	render(){
		return (
			<header>
				<h1>WEB</h1>
				<p>World Wide Web!</p>
			</header>
		);
	}
}

class TOC extends Component {
	render(){
		return (
			<nav>
				<ul>
					<li>
						<a href = "1.html">HTML</a>
					</li>
					<li>
						<a href = "2.html">CSS</a>
					</li>
					<li>
						<a href = "3.html">JavaScript</a>
					</li>
				</ul>
			</nav>
		);
	}
}

class Content extends Component {
	render(){
		return (
			<article>
				<h2>HTML</h2>
				<p>HTML is ...</p>
			</article>
		);
	}
}

class App extends Component {
	render(){
		return (
			<div className="App">
		      <Subject></Subject>
		      <TOC></TOC>
		      <Content></Content>
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
