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
			<ItemInfoContainer name={ name } rating={ rating } description={ <span>
		      <p>When I started my career in 2012, I had minimal expertise in CSS. Actually, I had only done one or two basic college projects using CSS 2.1. However, my CSS mojo would soon take off while working at my first "real" job at a small boutique web design company based in Charlottesville, VA called CvilleIT. I entered the company as an Intern which later turned into a Software Developer job helping them build a web app called SchedulePOP using Symfony (a PHP framework), Foundation 4 (a Front-End framework), jQuery and MySQL. At that same time, their lead designer needed to move to New York and was leaving a gapping hole in the company. After noticing my innate talent for design with my voluntary renovation of the SchedulePOP aesthetics and my eye for details, they assigned me to his tutelage. In that next month, I spent every waking hour ingesting all the information about CSS that he passed down to me or that I could get my hands on. By the time he left, I had developed a well rounded understanding of the strengths, weaknesses, capabilities and best practices of CSS.</p>
					
					<p>As time went by, I continued to mature in my CSS, helping develop the Lockn Festival web site and eventually was contracted out to other companies like StoryWare (Richmond, VA) with whom I worked on a site for ACAC using Wordpress, PHP, SASS and Javascript and MusicToday (Crozet, VA) for whom I helped update as well as built many artist ticketing sites including Kenny Chesney, Tim McGraw, Phish and Megaticket along with many others using ModX and Bootstrap or Foundation for the new ones but an archaic XML structure for the legacy sites. </p>

					<p>As my skills developed, so did my responsibilities to the extent that I had my foot in every project in terms of design, CSS or just to answer questions. A highlight of my stay at CvilleIT was when one morning (~11:55am) I received a call from my boss saying that one of our clients had had a miscommunication between Marketing and IT and was about to announce a link to a new event on a new webpage that hadn't been created yet. One minute later, we hoped on a call with the client as I tried to anticipate the his needs and logged into the servers and got my environment ready. He reiterated the problem and asked if there was anything I could do. I decided that I could transform their 404 error page into a temporary splash page. With 2 minutes until the announcement went live I explained my solution as I solved it. I duplicated the 404 error page, changed the name and the text to be more appropriate, and jumped into the CSS to update some critical display elements and updated the versioning in the html file (for anti-caching purposes). As the clock struck noon, I had finished and traffic began to pour onto the webpage. To the clients delight, customers now faced a friendly message to check back in a few minutes instead of a cold hard 404 error page.</p>
					
					<p>A couple months later, I parted ways with CvilleIT but remained in contact as a contractor. After a job with an iOS development team sustaining a makerspace called Tinkersmiths Makerspace (Charlottesville, VA), and a flight to Austin, Texas to interview with IBM, I was contracted by Moonlighting (Charlottesville, VA), a small Start-Up as a Front-End Designer. I, working closely with the COO, developed the wireframes for the next generation of their mobile app as well as web app. Along with mockups and wireframes, I also provided spur-of-the-moment Front-End Development help and fixes for lead generation landing pages as well as general bug fixing. After a couple months of working with Moonlighting. I was invited to lead a full day CSS "hot-house" in their Dev Headquarters in Richmond, VA. The goal of the "hot-house" was to teach and discuss best practices in regards to CSS and styling on the web and to get all their developers on the same page. It was an amazing and energizing experience.</p>

					<p>While contracting with Moonlighting, I was recruited by Fisher Auto Parts (Staunton, VA) as a contract-to-hire Front-End Designer. The after market car part industry has been notoriously behind the times when it comes to the world of IT and I found the job to be a perfect vessel for my skills and passion. I had four essential jobs; 1) To revitalize the internal customer (auto shops) facing site 2) To wireframe, mockup and prototype new functionality 3) To develop and educate my coworkers on a system for keeping things ordered, consistent and future proof and 4) To research new development trends. I started out by browsing and aggregating all the elements used throughout the site with all the different classes. I took each element and, after some substantial research, designed them to account for each state and context. I, then, began a series of search and replace campaigns that progressively began to make the site look much more consistent. Using these elements and learning a couple tricks from current CSS frameworks (like Foundation and Bootstrap), I assembled it all into a custom CSS framework (with a few Javascript helper functions) that was easy to use, slim, fully-responsive, accessible, mobile-first and themeable (using SASS). This framework included all the stylings of normal html elements as well as modal/popups, alerts/notifications, help indicators, loading indicators, icons, animations, . Once the framework was done, training sessions, lead by me, were set up with the team. Our first session went over each item, where to find it, how to use it and why it is this way. Our second session took the last couple of deeply nested pages, one for each developer, each of which then attempted to bring the legacy pages up to modern coding standards. In this environment, my coworkers were able to ask pointed, pragmatic, real-time questions to the group about how to implement each element and why, as well as allow us to have open discussions about any issues or suggestions. This framework and training sessions engraved our new direction as a department.</p>

					<p>Once my contract was over, I respectfully declined their job offer and set out to follow my life long dream to travel the world. While traveling, after several months I became bored and restless both to see new places and to put my skills and my passion to work; I was feeling an urge to help. Coincidentally, seven months into my travels, I was approach by some old contacts who had projects that were in need of immediate help which included building custom themeable sites (Wordpress, CSS, Javascript and PHP). After more months of traveling, freelancing and volunteering my time at "Workaways", and finding what I had been searching for, I decided that it was time for me to return to the real world and find something I was passionate enough about to sink my teeth into. This led me to create/update this website...</p>
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