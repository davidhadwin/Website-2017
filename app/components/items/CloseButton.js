import React, { Component } from "react"
import { Link } from "react-router-dom"

import SVGInline from "react-svg-inline";
import thumbNail from "./../images/site-images/close.svg";

class CloseButton extends Component {
	render () {
		return (
			<Link to="/">
				<div className="close-button-container">
					<SVGInline svg={ thumbNail } />
				</div>
			</Link>
		)
	}
}

export default CloseButton