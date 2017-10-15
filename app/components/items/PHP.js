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
			<ItemInfoContainer name={ name } rating={ rating } description={ <span>
		      <p>I learned PHP out of necessity. While creating SnapMenu, I was in need of a language that could act as the liaison between my Objective-C front end and my MySQL back end, PHP was perfect for the job. Using it, I created a series of RESTful endpoints to manage the database.</p>

				<p>In 2012, while stumbling through learning PHP, I landed a paid internship for a company based in Scottsville, VA called Fuscata LLC dealing solely with this jack-of-all-trades language. During this internship I developed my PHP skills and created a database management and alert system. The system would monitor multiple databases and post alerts to a database when certain functions weren’t working properly and resolve them when things were back up and running. This system took me 3 months to build and continued to be used to this day.</p>

				<p>After finishing SnapMenu and my internship, I was hired by CvilleIT where I helped build SchedulePOP using Symfony (a PHP framework), Foundation 4 (a Front-End framework), jQuery and MySQL. From there we learned ModX (a PHP CMS) as a company and created website templates, widgets, chunks and scripts that could be reused and would allow us to rapidly increase our site development. I was put in charge of websites for many artists including Phish, Megaticket, Lockn Festival and Bun E. Carlos. Later, I was contracted out to StoryWare (Richmond, VA) to help build a website for ACAC built on Wordpress (a PHP CMS).</p>

				<p>I parted ways with CvilleIT but remained in contact as a contractor. After a job with an iOS development team sustaining a makerspace called Tinkersmiths Makerspace (Charlottesville, VA), a flight to Austin, Texas to interview with IBM, a contracting gig with a small start up called Moonlighting (Charlottesville, VA) and a contract-to-hire position with an after market auto parts distributor called Fisher Auto Parts (Staunton, VA), I set out to follow my life long dream to travel the world.</p>

				<p>While traveling, after several months I became bored of seeing new places and restless to put my skills and my passion to work; I was feeling an urge to help. Coincidentally, seven months into my travels, I was approach by some old contacts who had projects that were in need of immediate help. One project was to take an existing Wordpress template, style it according to a pre-approved design and make it theme-able so that it could be reused with different related venues (NolaFunk and CEGPresents). Another was to build a site for The Van Buren PHX which wanted a custom site, also built off of Wordpress, according to their design. All of these sites needed to be fully responsive, easily maintainable and editable for non-tech savvy individuals. After more months of traveling, freelancing and volunteering my time at "Workaways", and finding what I had been searching for, I decided that it was time for me to return to the real world and find something I was passionate enough about to sink my teeth into. This led me to create/update this website...</p></span> } />
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