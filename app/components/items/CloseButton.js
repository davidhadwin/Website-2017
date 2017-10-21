import React, { Component } from "react"
import { Link } from "react-router-dom"

import SVGInline from "react-svg-inline";
import thumbNail from "./../images/site-images/close.svg";

class CloseButton extends Component {
	render () {
		var currentPathName = window.location.href;
		var currentRoute = currentPathName.split('#').pop();
		var lastRoute = currentRoute.split('/');
		lastRoute.pop();
		lastRoute = lastRoute.join('/');
		return (
			<Link to={ this.props.previous ? lastRoute : "/" }>
				<div className="close-button-container">
					<SVGInline svg={ thumbNail } />
				</div>
			</Link>
		)
	}
}

CloseButton.defaultProps = {
	previous: false
}

export default CloseButton