import React, { Component } from 'react';


class Navigation extends Component {
	render () {
		return (
			<nav className="navigation-container">
      	<div className="hex-section">
			  	{ this.props.children }
			  </div>
			</nav>
		)
	}
}

export default Navigation;