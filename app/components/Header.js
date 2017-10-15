import React, { Component } from 'react';

import SVGInline from "react-svg-inline";
import animatedLogoSVG from "./images/site-images/fullAnimatedLogo.svg";

class Header extends Component {
	render () {
		return (
			<section id="header"><SVGInline svg={ animatedLogoSVG }/></section>
		)
	}
}

export default Header;