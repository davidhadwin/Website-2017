import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"

import MentalMathTrainer from "./../works/MentalMathTrainer"
import SnapMenu from "./../works/SnapMenu"

import thumbNail from "./../images/hexes/languages/objective-c.svg";

const name = "Objective-C";
const rating = "4";
const route = "/languages/objective-c";

function defaultView(props) {
  return (
  	<Hex name={ name } route={ route } rating={ rating } svg={ thumbNail } />
  );
}

function expandedView(url) {
	return (
		<div className="hex-info-container">
			<ItemInfoContainer name={ name } rating={ rating } description={
				<ul>
					<li>Self taught Objective-C at Lynchburg College (2012)</li>
					<li>Created and released SnapMenu, the first Foodspotting type app on the Apple App Store, as my senior project</li>
					<li>Attended two Start Up Weekends and got 2nd place with the giv2giv team</li>
					<li>Volunteered my time developing the iOS app for giv2giv</li>
					<li>Created and released Mental Math Trainer, an addictive math problem solving iOS app</li>
					<li>Worked at Tinkersmiths Makerspace in Charlottesville, VA</li>
						<li>Developed a teaching app for internal use with one of our clients for iPhone and Apple Watch</li>
						<li>Given 7 days by client to extend functionality from iPhone app to Apple Watch immediately after watch was released by Apple for a trade show; it only took me 3</li>
						<li>Designed and developed a photo categorization app for iPad named PhotoBliss</li>

					@TODO - Add iOS frameworks you worked with - DH
				</ul>} />
		  <RelatedWorkContainer>
  			<MentalMathTrainer url={url}/>
  			<SnapMenu url={url}/>
		  </RelatedWorkContainer>
	  </div>
	)
}

class ObjectiveC extends Component {
	render () {
		if (this.props.match) {
			return expandedView (this.props.match.url);
		} else {
			return defaultView ();
		}
	}
}

export default ObjectiveC;