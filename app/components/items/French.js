import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"

import thumbNail from "./../images/hexes/languages/fr.svg";

const name = "French";
const rating = "3";
const route = "/languages/french";

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
					<li>Raised speaking French till the age of 7</li>
					<li>Forgot French while learning English because of never having learned to read and write</li>
					<li>Took French classes from high school through college</li>
					<li>Volunteered 2 weeks at Workaways in both Nantes and Normandy, France</li>
					<li>Hitch-hiked around France for 2 months</li>
					<li>Mastered the French course in Duolingo</li>
					<li>Achieved working proficiency</li>
				</ul> } />
	  </div>
	)
}

class French extends Component {
	render () {
		if (this.props.match) {
			return expandedView (this.props.match.url);
		} else {
			return defaultView ();
		}
	}
}

export default French;