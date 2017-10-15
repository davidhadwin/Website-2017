import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Star from "./../Star"
import CloseButton from "./CloseButton"

class ItemInfoContainer extends React.Component {
	render () {
		return (
			<div className="hex-info">
				<CloseButton/>
		    <h1>{ this.props.name }</h1>
		    <Star rating={ this.props.rating } />
		    <div className="description">
		      { this.props.description }
		    </div>
		  </div>
		)
	}
}

export default ItemInfoContainer;