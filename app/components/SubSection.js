import React, { Component } from 'react';


class SubSection extends Component {
	render () {
		return (
			<div className="sub-section">
				<h2>{ this.props.header }</h2>
	      <div className="hex-container">
	  			{ this.props.children }
			  </div>
		  </div>
		)
	}
}

export default SubSection;