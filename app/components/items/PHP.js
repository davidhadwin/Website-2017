import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import ItemInfoContainer from "./ItemInfoContainer"
import RelatedWorkContainer from "./../works/RelatedWorkContainer"
import Hex from "./Hex"
import JobSection from "./JobSection"

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
			<ItemInfoContainer name={ name } rating={ rating } description={ <span>
				<JobSection company="Lynchburg College" title="Student">
					<li>Started working with PHP at Lynchburg College (2010)</li>
					<li>Created a series of RESTful endpoints for the database management of my first iOS app SnapMenu</li>
				</JobSection>
				<JobSection company="Fuscata LLC" title="Intern">
					<li>Interned remotely with Fuscata LLC</li>
					<li>Developed a multi-database monitoring system with self healing alerts</li>
				</JobSection>
				<JobSection company="CvilleIT" title="Lead Front-End Designer">
					<li>Worked with a team to develop a restaurant management system called SchedulePOP using Symfony</li>
					<li>Managed and updated legacy websites for <a href="https://kennychesney.com/?redirect=false" target="_new">Kenny Chesney</a>, <a href="http://www.mcgrawfan.com" target="_new">McGrawFan</a>, <a href="http://www.tobykeith.com" target="_new">Toby Keith</a>, <a href="https://jeffgordon.com" target="_new">Jeff Gordon</a>, <a href="http://www.trans-siberian.com/index/home" target="_new">Trans-Siberian Orchestra</a>, <a href="http://www.acdc.com" target="_new">ACDC</a> and <a href="https://www.graceland.com" target="_new">Graceland</a></li>
					<li>Developed websites for <a href="http://tickets.phish.com" target="_new">Phish</a>, <a href="http://www.locknfestival.com" target="_new">Lockn' Festival</a>, <a href="http://www.megaticket.com" target="_new">Megaticket</a>, <a href="http://store.cyndilauper.com" target="_new">Cyndi Lauper</a>, <a href="http://kingsofleon.rockandrolltshirts.com" target="_new">Kings of Leon</a>, <a href="http://vampireweekend.kungfustore.com" target="_new">Vampire Weekend</a>, Bun. E. Carlos and Oakridge using ModX</li>
					<li>Subcontracted out to StoryWare to help build a site for <a href="http://www.acac.com" target="_new">ACAC</a> built on Wordpress</li>
					</JobSection>
					<JobSection company="Other Experiences">
						<li>Worked remotely as a freelancer and developed websites for Nola Funk, CEG Presents and The Van Buren PHX built on Wordpress</li>
						<li>Worked with Symfony, Wordpress and ModX</li>
					</JobSection>
				</span> } />
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