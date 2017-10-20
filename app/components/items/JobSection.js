import React, { Component } from 'react'

class JobSection extends Component {
	render () {
		return (
					<div>
						<header className="job">{this.props.company} {this.props.title && <span className="title">{this.props.title}</span>}</header>
						<ul>
							{this.props.children}
						</ul>
					</div> 
			)
	}
}

export default JobSection;