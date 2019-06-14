import React, { Component } from 'react';

class TOC extends Component {
	// 성능향상 랜더링 횟수 줄임.
	shouldComponentUpdate(newProps, newState){
//		console.log('===>TOC render shouldComponentUpdate()',
//				newProps.data,
//				this.props.data
//		);
		console.log('===>TOC render shouldComponentUpdate()');
		if(this.props.data === newProps.data){
			return false;
		}
		return true;
	}
	render(){
		console.log('===>TOC render');
		var list = [];
		var data = this.props.data;
		var i = 0;
		while(i < data.length){
			list.push(<li key = {data[i].id}>
						<a href = {"/content/" + data[i].id}
						   data-id = {data[i].id}
						   onClick = {function(e){
							   e.preventDefault();
							   this.props.onChangePage(e.target.dataset.id);
						   }.bind(this)}>{data[i].title}</a>	
					  </li>);
			i++;
		}
		return (
			<nav>
				<ul>
					{list}
				</ul>
			</nav>
		);
	}
}

export default TOC;