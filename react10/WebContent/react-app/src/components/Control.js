import React, { Component } from 'react';

// JavaScript 최신 스펙, class 안에서는 function 생략
class Control extends Component {
	render(){
		console.log('Control render');
		return (
		   <ul>
		      	<li><a href = "/create" onClick = {function(e){
		      		e.preventDefault();
		      		this.props.onChangeMode('create');
		      	}.bind(this)}>create</a></li>
		      	<li><a href = "/update" onClick = {function(e){
		      		e.preventDefault();
		      		this.props.onChangeMode('update');
		      	}.bind(this)}>update</a></li>
		      	<li><input type = "button" value = "delete" onClick = {function(e){
		      		e.preventDefault();
		      		this.props.onChangeMode('delete');
		      	}.bind(this)}></input></li>
		   </ul>
		);
	}
}

export default Control;