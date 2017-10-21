import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import Star from "./../Star"

import SVGInline from "react-svg-inline";

class Hex extends Component {
	render () {
		return (
			<NavLink className={ this.props.show ? "hex" : "hex inactive" } activeClassName="active" to={ this.props.route }>
	  		<SVGInline svg={ this.props.svg } />
	  		<span className="hex-description">
	  			<div className="hex-name"> { this.props.name } </div>
	  			<Star rating={ this.props.rating }/>
	  		</span>
	  	</NavLink>
		)
	}
}

Hex.defaultProps = {
	show: true
}

export default Hex;