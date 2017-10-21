import React, { Component } from 'react';


class HorizontalScroll extends Component {
	render () {
		return (
			<div>
				<h2>{ this.props.header }</h2>
				<div className="scroll-container">
	      	<div className="hex-section">
				  	{ this.props.children }
				  </div>
				</div>
			</div>
		)
	}
}

export default HorizontalScroll;