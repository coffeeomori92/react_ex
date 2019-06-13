import React, { Component } from 'react';

// JavaScript 최신 스펙, class 안에서는 function 생략
class Subject extends Component {
	render(){
		return (
			<header>
				<h1><a href = "/">{this.props.title}</a></h1>
				<p>{this.props.sub}</p>
			</header>
		);
	}
}

export default Subject;