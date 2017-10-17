import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"


// Import Related Works
import Acac from "./../works/Acac";
import NolaFunk from "./../works/NolaFunk";
import TheVanBurenPHX from "./../works/TheVanBurenPHX";
import Phish from "./../works/Phish";

import thumbNail from "./../images/hexes/languages/css3.svg";

const name = "CSS 3";
const rating = "5";
const route = "/languages/css";

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
						<li>Started using CSS at Lynchburg College (2010)</li>
						<li>Interned at CvilleIT as a Full-Stack Developer and was mentored to become their Lead Front-End Designer and as well as a Developer (2013)</li>
							<li>Managed and updated legacy websites for Kenny Chesney, Tim McGraw, Toby Keith, Jeff Gordon, Trans-Siberian Orchestra, ACDC and Elvis Presley</li>
							<li>Developed websites for Phish, Lockn' Festival, Megaticket, Megacountry, Cyndi Lauper, Kings of Leon, Vampire Weekend, Bun. E. Carlos and Oakridge</li>
							<li>Saved a client by building a webpage in 5 minutes before traffic came pouring in</li>
							<li>Subcontracted out to StoryWare to help build a site for <a href="www.acac.com">ACAC</a></li>
						<li>Flown out to Austin, Texas for a final round interview with IBM Design</li>
						<li>Contracted by Moonlighting LLC as a Front-End Designer and Developer</li>
							<li>Manifested multiple landing pages for lead generation</li>
							<li>Led a "Hot House" CSS bootcamp for Moonlighting's Richmond office</li>
						<li>Worked at Fisher Auto Parts as their Lead Designer but also put my skills in Front-End Development to work</li>
							<li>I created a custom living style guide for coordination and company wide coherence that was fully-responsive, mobile first, accessible, slim and themeable (using the power of CSS preprocessers)</li>
							<li>Led training workshops to enlighten co-workers to modern CSS coding standards</li>
							<li>Was allowed significant research time to find the most modern and future proof CSS solutions to the companies development problems and ideas</li>
						<li>Designed and developed this website using CSS preprocessers</li>

						<li>Extensively utilized Bootstrap and Foundation frameworks</li>
					</ul> } />
		  <RelatedWorkContainer>
	    	<Acac url={url}/>
  			<NolaFunk url={url}/>
  			<Phish url={url}/>
  			<TheVanBurenPHX url={url}/>
		  </RelatedWorkContainer>
	  </div>
	)
}

class CSS extends Component {
	render () {
		if (this.props.match) {
			return expandedView (this.props.match.url);
		} else {
			return defaultView ();
		}
	}
}

export default CSS;