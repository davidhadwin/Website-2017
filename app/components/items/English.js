import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"

import thumbNail from "./../images/hexes/languages/us.svg";

const name = "English";
const rating = "5";
const route = "/languages/english";

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
					<li>Learned English when my family moved to the United States around the age of 7</li>
					<li>While in Hawaii, learned the Hawaiian dialect of English called Hawaiian Pidgeon</li>
					<li>Relearned proper English when we moved back onto the mainland to Michigan</li>
					<li>Achieved Native level fluency</li>
					<li>Attended school through college in English</li>
				</ul> } />
	  </div>
	)
}

class English extends Component {
	render () {
		if (this.props.match) {
			return expandedView (this.props.match.url);
		} else {
			return defaultView ();
		}
	}
}

export default English;