import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"
import JobSection from "./JobSection"


// Import Related Works
import Acac from "./../works/Acac";
import NolaFunk from "./../works/NolaFunk";
import TheVanBurenPHX from "./../works/TheVanBurenPHX";
import Phish from "./../works/Phish";

import thumbNail from "./../images/hexes/languages/css.svg";

const name = "CSS";
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
			<ItemInfoContainer name={ name } rating={ rating } description={ <span>
					<JobSection company="Lynchburg College" title="Student">
						<li>Started using CSS at Lynchburg College (2010)</li>
					</JobSection>
					<JobSection company="CvilleIT LLC" title="Lead Front-End Designer">
						<li>Started as a Software Development Intern and was mentored to become their Lead Front-End Designer</li>
						<li>Managed and updated legacy websites for <a href="https://kennychesney.com/?redirect=false" target="_new">Kenny Chesney</a>, <a href="http://www.mcgrawfan.com" target="_new">McGrawFan</a>, <a href="http://www.tobykeith.com" target="_new">Toby Keith</a>, <a href="https://jeffgordon.com" target="_new">Jeff Gordon</a>, <a href="http://www.trans-siberian.com/index/home" target="_new">Trans-Siberian Orchestra</a>, <a href="http://www.acdc.com" target="_new">ACDC</a> and <a href="https://www.graceland.com" target="_new">Graceland</a></li>
						<li>Developed websites for <a href="http://tickets.phish.com" target="_new">Phish</a>, <a href="http://www.locknfestival.com" target="_new">Lockn' Festival</a>, <a href="http://www.megaticket.com" target="_new">Megaticket</a>, <a href="http://store.cyndilauper.com" target="_new">Cyndi Lauper</a>, <a href="http://kingsofleon.rockandrolltshirts.com" target="_new">Kings of Leon</a>, <a href="http://vampireweekend.kungfustore.com" target="_new">Vampire Weekend</a>, Bun. E. Carlos and Oakridge</li>
						<li>Saved a client by building a webpage in 5 minutes before traffic came pouring in</li>
						<li>Subcontracted out to StoryWare to help build a site for <a href="http://www.acac.com" target="_new">ACAC</a></li>
					</JobSection>
					<JobSection company="Moonlighting LLC" title="Front-End Designer and Developer">
						<li>Manifested multiple landing pages for lead generation</li>
						<li>Led a "Hot House" CSS bootcamp for Moonlighting's Richmond office</li>
					</JobSection>
					<JobSection company="Fisher Auto Parts" title="Lead Designer">
						<li>I created a custom living style guide for coordination and company wide coherence that was fully-responsive, mobile first, accessible, slim and themeable (using the power of CSS preprocessers)</li>
						<li>Led training workshops to enlighten co-workers to modern CSS coding standards</li>
						<li>Was allowed significant research time to find the most modern and future proof CSS solutions to the companies development problems and ideas</li>
					</JobSection>
					<JobSection company="Other Experiences">
						<li>Designed and developed this website using CSS preprocessers</li>
						<li>Flown out to Austin, Texas for a final round interview with IBM Design</li>
						<li>Extensively utilized Bootstrap and Foundation frameworks</li>
					</JobSection>
					</span> } />
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