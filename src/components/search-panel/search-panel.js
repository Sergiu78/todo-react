import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		};

	}

	onUpdateSearch(event){
		const term = event.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);

	}

		render(){
		   return (
		    <input
		      className="form-control search-panel"
		      type="text"
		      placeholder="Поиск по сайту"
		      onChange={this.onUpdateSearch.bind(this)}/>
		  )
			}
	}
	


