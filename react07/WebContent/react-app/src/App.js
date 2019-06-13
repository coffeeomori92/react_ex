import React, { Component } from 'react';
import Subject from './components/Subject.js';
import TOC from './components/TOC.js';
import Content from './components/Content.js';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
				mode:'read',
				subject:{title : 'WEB', sub : 'World Wide Web!'},
				welcome:{title : 'Welcome', desc : 'Hello, React!'},
				contents:[
					{id : 1, title : 'HTML', desc : 'HTML is ...'},
					{id : 2, title : 'CSS', desc : 'CSS is ...'},
					{id : 3, title : 'JavaScript', desc : 'JavaScript is ...'}
				]
		}
	}
	render(){
		var _title, _desc = null;
		if(this.state.mode === 'welcome'){
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		}else if(this.state.mode === 'read'){
			_title = this.state.contents[0].title;
			_desc = this.state.contents[0].desc;
		}
		return (
			<div className="App">
		      <Subject 
		      	title = {this.state.subject.title} 
		      	sub   = {this.state.subject.sub}
		      	onChangePage = {function(){
		      		this.setState({
		      			mode : 'welcome'
		      		});
		      	}.bind(this)}></Subject>
				{/*<header>
					<h1><a href = "/" onClick = {function(event){
						event.preventDefault();
					//	this.state.mode = 'welcome';
						this.setState({
							mode : 'welcome'
						});
					}.bind(this)}>{this.state.subject.title}</a></h1>
					<p>{this.state.subject.sub}</p>
				</header>*/}
		      <TOC data = {this.state.contents}></TOC>
		      <Content title = {_title} desc = {_desc}></Content>
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
