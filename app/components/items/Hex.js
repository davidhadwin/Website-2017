import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import Star from "./../Star"

import SVGInline from "react-svg-inline";


class Hex extends Component {
	render () {
		return (
			<NavLink className="hex" activeClassName="active" to={ this.props.route }>
	  		<SVGInline svg={ this.props.svg } />
	  		<span className="hex-description">
	  			<div className="hex-name"> { this.props.name } </div>
	  			<Star rating={ this.props.rating }/>
	  		</span>
	  	</NavLink>
		)
	}
}

export default Hex;