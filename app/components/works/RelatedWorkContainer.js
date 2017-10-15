import React, { Component } from 'react';

class RelatedWorkContainer extends Component {
	render () {
		return (
			<div className="hex-related-work-container">
			<hr/>
			  <h1>Related Work</h1>
			  <div className="hex-related-works">
		    	{ this.props.children }
			  </div>
			</div>
		)
	}
}

export default RelatedWorkContainer;