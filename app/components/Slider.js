import React, { Component } from 'react';


class Slider extends Component {
	componentDidMount () {
    console.log("Slider Width: " + this.slider.offsetWidth);
    console.log("Slider Children: " + this.props.children[0]);
  }

	render () {
		return (
			<div ref={input => {this.slider = input}} className="slider-container">
      	<div className="hex-section">
			  	{ this.props.children }
			  </div>
			</div>
		)
	}
}

export default Slider;