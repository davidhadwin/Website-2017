import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"
import JobSection from './JobSection'

import SnapMenu from "./../works/SnapMenu"
import Acac from "./../works/Acac"
import NolaFunk from "./../works/NolaFunk"
import TheVanBurenPHX from "./../works/TheVanBurenPHX"
import Phish from "./../works/Phish"

import thumbNail from "./../images/hexes/languages/javascript.svg"

const name = "JavaScript";
const rating = "4";
const route = "/languages/javascript";

function defaultView(props) {
  return (
  	<Hex name={ name } route={ route } rating={ rating } svg={ thumbNail } />
  );
}

function expandedView(url) {
	return (
		<div className="hex-info-container">
			<ItemInfoContainer name={ name } rating={ rating } description={ <span>
					<JobSection company="Lynchburg College" title="Student">
						<li>Started working with JavaScript at Lynchburg College (2011)</li>
					</JobSection>
					<JobSection company="CvilleIT" title="Lead Front-End Designer">
						<li>Worked with a team to develop a restaurant management system called SchedulePOP using jQuery</li>
						<li>Created a proprietary customizable ModX slider chunk for use on a website for <a href="http://tickets.phish.com">Phish</a> and others</li>
						<li>Dealt with social media integrations for Facebook, Twitter, Instagram, Youtube, Spotify and SoundCloud</li>
						<li>Added a video submission page contest page to <a href="https://kennychesney.com/?redirect=false" target="_new">Kenny Chesney</a> with format and size validation</li>
					</JobSection>
					<JobSection company="Moonlighting LLC" title="Front-End Designer and Developer">
						<li>Manifested multiple landing pages for lead generation</li>
					</JobSection>
					<JobSection company="Fisher Auto Parts" title="Lead Designer">
						<li>Designed and developed custom tooltips, loading spinners and a notification suite as part of proprietary style guide</li>
					</JobSection>
					<JobSection company="Other Experience">
						<li>Created this website using React.js</li>
						<li>Flown out to Austin, Texas for a final round interview with IBM Design</li>
					</JobSection>
				</span> } />
		  <RelatedWorkContainer>
  			<NolaFunk url={url}/>
  			<Phish url={url}/>
  			<TheVanBurenPHX url={url}/>
		  </RelatedWorkContainer>
	  </div>
	)
}

class JavaScript extends Component {
	render () {
		if (this.props.match) {
			return expandedView (this.props.match.url);
		} else {
			return defaultView ();
		}
	}
}

export default JavaScript;