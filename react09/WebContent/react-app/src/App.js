import React, { Component } from 'react';
import Subject from './components/Subject.js';
import TOC from './components/TOC.js';
import Control from './components/Control.js';
import ReadContent from './components/ReadContent.js';
import CreateContent from './components/CreateContent.js';
import UpdateContent from './components/UpdateContent.js';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.max_content_id = 3;
		this.state = {
				mode:'create',
				selected_content_id:1,
				subject:{title : 'WEB', sub : 'World Wide Web!'},
				welcome:{title : 'Welcome', desc : 'Hello, React!'},
				contents:[
					{id : 1, title : 'HTML', desc : 'HTML is ...'},
					{id : 2, title : 'CSS', desc : 'CSS is ...'},
					{id : 3, title : 'JavaScript', desc : 'JavaScript is ...'}
				]
		}
	}
	getReadContent(){
		var i = 0;
		while(i < this.state.contents.length){
			var data = this.state.contents[i];
			if(data.id === this.state.selected_content_id){
				return data;
			}
			i++;
		}
	}
	getContent(){
		var _title, _desc, _article, _content = null;
		if(this.state.mode === 'welcome'){
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReadContent title = {_title} desc = {_desc}></ReadContent>;
		
		}else if(this.state.mode === 'read'){
			_content = this.getReadContent();
			_article = <ReadContent title = {_content.title} desc = {_content.desc}></ReadContent>;
		
		}else if(this.state.mode === 'create'){
			_article = <CreateContent onSubmit = {function(_title, _desc){
				this.max_content_id = this.max_content_id + 1;
				// push는 오리지널 데이터를 변경한다.
//				this.state.contents.push(
//						{id : this.max_content_id, title : _title, desc : _desc}		
//				);
				var _contents = this.state.contents.concat({
					id : this.max_content_id, title : _title, desc : _desc
				});
				this.setState(
						{contents : _contents}
				);
			}.bind(this)}></CreateContent>;
		}else if(this.state.mode === 'update'){
			_content = this.getReadContent();
			_article = <UpdateContent data = {_content} onSubmit = {function(_title, _desc){
				this.max_content_id = this.max_content_id + 1;
				// push는 오리지널 데이터를 변경한다.
//				this.state.contents.push(
//						{id : this.max_content_id, title : _title, desc : _desc}		
//				);
				var _contents = this.state.contents.concat({
					id : this.max_content_id, title : _title, desc : _desc
				});
				this.setState(
						{contents : _contents}
				);
			}.bind(this)}></UpdateContent>;
		}
		return _article;
	}
	render(){
		console.log('App render');
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
		      <TOC onChangePage = {function(id){
		    	  this.setState({
		    		  mode : 'read',
		    		  selected_content_id : Number(id)
		    	  });
		      }.bind(this)} 
		      data = {this.state.contents}></TOC>
		      <Control onChangeMode = {function(_mode){
		    	  this.setState({
		    		 mode : _mode
		    	  });
		      }.bind(this)}></Control>
		      {this.getContent()}
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
