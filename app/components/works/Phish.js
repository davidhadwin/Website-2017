import React, { Component } from 'react'
import RelatedWork from './RelatedWork'
import HorizontalScroll from "./../HorizontalScroll"

import HTML from "./../items/HTML"
import JavaScript from "./../items/JavaScript"
import CSS from "./../items/CSS"
import PHP from "./../items/PHP"
import ModX from "./../items/ModX"

import thumbNail from "./../images/previous-work/phish.jpg";

const name = 'Phish Tickets';
const role = "Front-End Developer";
const duration = "~7 days";
const site = "tickets.phish.com"
const path = 'phish';
const size = 'medium';

class Phish extends React.Component {
	render () {
    return (
      <RelatedWork 
      	name={name}
      	role={role}
      	duration={duration}
      	site={site}
      	path={path} 
      	thumbNail={thumbNail} 
      	size={size} 
      	url={this.props.url}>
      	<HorizontalScroll header="Tools & Languages Used">
	        <HTML />
	        <JavaScript />
	        <CSS />
	        <PHP />
	        <ModX />
        </HorizontalScroll>
      </RelatedWork>
    )
  }
}

export default Phish;