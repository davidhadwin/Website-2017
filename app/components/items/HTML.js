import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"
import JobSection from "./JobSection"


// Import Related Works

import thumbNail from "./../images/hexes/languages/html.svg";

const name = "HTML";
const rating = "5";
const route = "/languages/html";

function defaultView(props) {
  return (
  	<Hex name={ name } route={ route } rating={ rating } svg={ thumbNail } show={false} />
  );
}

function expandedView(url) {
	return (
		<div className="hex-info-container">
			<ItemInfoContainer name={ name } rating={ rating }  />
		  <RelatedWorkContainer>

		  </RelatedWorkContainer>
	  </div>
	)
}

class HTML extends Component {
	render () {
		if (this.props.match) {
			return expandedView (this.props.match.url);
		} else {
			return defaultView ();
		}
	}
}

export default HTML;