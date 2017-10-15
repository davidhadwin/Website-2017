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
			<ItemInfoContainer name={ name } rating={ rating } description={ <span>
		      <p>I started my Objective-C career during my senior project while I was at Lynchburg College. Instead of a thesis, Computer Sciences Bachelor candidates were required to build something. Realizing Apple and the iPhone were primed to take the world by storm, I decided to spend my last year tackling this new language. However, since developing apps was a brand new field, none of my professors could help me other than with theory or data structures. While brainstorming with a friend, we came up with an idea for using the iPhone to provide customers with pictures of the food they were about to order taken by other real customers; this idea developed into SnapMenu. SnapMenu was the first "Food Spotting" app released on the Apple App Store. Unfortunately, across the country, a Google Incubator project named Foodspotting was being developed at the same time with the backing of Google and a solid team. I decided to discontinue SnapMenu and continue my learning.</p>

					<p>During my stint building SnapMenu, I attended two "Start Up Weekends" in Charlottesville, VA to test the waters and my skills. During these events, I helped start and create a philanthropic app called giv2giv that intends to help individuals turn their monthly charitable donations into a dowry that will gradually increase their donation funds and allow them to donate forever. We won 2nd place for this project. Another app I helped create was called Blue Board, which would have notified users to notable sites such as view points, tourist sites, gas stations, toilets along their highway routes but soon died after the weekend.</p>

					<p>A week after the first Start Up Weekend and after graduating, I was contacted by Michael Blinn, the founder of giv2giv to continue contributing to building out the functionality of the app to which I gladly agreed. We met regularly for a couple months until some volunteers noticed that my skills were too valuable to not be employed. This led me to my year with CvilleIT (Charlottesville, VA).</p>

					<p>After a series of Meetups, I found myself working at Tinkersmiths Makerspace (Charlottesville, CA). Tinkersmiths was, at that time, the only free makerspace in the United States. We, the development team, took on contracts and a little less than half of the money we charged went to keeping it free. Throughout my year with Tinkersmiths, I inherited one skunk-works enterprise-level communication app for iPhone as well as extended the functionality to the Apple Watch using UIKit, @TODO. During this time, I also built an image categorization app called PhotoBliss. The owner of PhotoBliss had attempted to build PhotoBliss twice before through other developers but ran into architectural limitations each time. After hearing his qualms and not seeing any reason why this should be impossible, we decided to take a risk and spend a week proving that we could make his idea work. After the week was done, our test was successful and we went on to build a speedy, efficient and beautiful user experience with which the client was extremely grateful.</p>
					
					<p>My time after Tinkersmiths was spent with a free flight to Austin, TX to interview with IBM Design followed by a couple months of UX consulting for Moonlighting (Charlottesville, VA), a Start-Up attempting to create an active marketplace for the gig industry. Afterwards, I was contracted-to-hire by Fisher Auto Parts (Staunton, VA) to be their Lead Designer for six months. Once the six months were over, I respectfully declined their offer and instead, decided to follow my life long dream of traveling the world.</p>

					<p>While traveling, after several months I became bored of seeing new places and restless to put my skills and my passion to work; I was feeling an urge to help. Coincidentally, seven months into my travels, I was approach by some old contacts who had projects that were in need of immediate help. After more months of traveling, freelancing and volunteering my time at "Workaways", and finding what I had been searching for, I decided that it was time for me to return to the real world and find something I was passionate enough about to sink my teeth into. This led me to create/update this website...</p></span> } />
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