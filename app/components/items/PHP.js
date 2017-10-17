import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"

import SnapMenu from "./../works/SnapMenu"
import Acac from "./../works/Acac"
import NolaFunk from "./../works/NolaFunk"
import TheVanBurenPHX from "./../works/TheVanBurenPHX"
import Phish from "./../works/Phish"

import thumbNail from "./../images/hexes/languages/php.svg"

const name = "PHP";
const rating = "4";
const route = "/languages/php";

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
					<li>Started working with PHP at Lynchburg College (2010)</li>
					<li>Created a series of RESTful endpoints for the database management of my first iOS app SnapMenu</li>
					<li>Interned remotely with Fuscata LLC</li>
						<li>Developed a multi-database monitoring system with self healing alerts</li>
					<li>Interned at CvilleIT as a Full-Stack Developer and was mentored to become their Lead Front-End Designer (2013)</li>
						<li>Worked with a team to develop a restaurant management system called SchedulePOP using Symfony</li>
						<li>Managed and updated legacy websites for Kenny Chesney, Tim McGraw, Toby Keith, Jeff Gordon, Trans-Siberian Orchestra and Elvis Presley</li>
						<li>Developed websites for Phish, Lockn' Festival, Megaticket, Cyndi Lauper, Kings of Leon, Vampire Weekend and Bun. E. Carlos using ModX</li>
						<li>Subcontracted out to StoryWare to help build a site for <a href="www.acac.com">ACAC</a> built on Wordpress</li>
					<li>Worked remotely as a freelancer and developed websites for Nola Funk, CEG Presents and The Van Buren PHX built on Wordpress</li>


					<li>Worked with Symfony, Wordpress and ModX</li>
				</ul>} />
		  <RelatedWorkContainer>
	    	<Acac url={url}/>
  			<NolaFunk url={url}/>
  			<Phish url={url}/>
  			<TheVanBurenPHX url={url}/>
  			<SnapMenu url={url}/>
		  </RelatedWorkContainer>
	  </div>
	)
}

class PHP extends Component {
	render () {
		if (this.props.match) {
			return expandedView (this.props.match.url);
		} else {
			return defaultView ();
		}
	}
}

export default PHP;