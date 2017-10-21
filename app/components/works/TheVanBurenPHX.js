import React, { Component } from 'react'
import RelatedWork from './RelatedWork'
import HorizontalScroll from './../HorizontalScroll'

import HTML from "./../items/HTML"
import CSS from "./../items/CSS"
import PHP from "./../items/PHP"
import JavaScript from "./../items/JavaScript"
import WordPress from "./../items/Wordpress"

import thumbNail from "./../images/previous-work/thevanburenphx.jpg";

const name = 'The Van Buren PHX';
const role = "Contract Front-End Developer";
const duration = "30 hrs";
const site = "www.thevanburenphx.com"
const path = 'thevanburenphx';
const size = 'medium';

class TheVanBurenPHX extends React.Component {
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
      			<CSS />
      			<HTML />
      			<JavaScript />
      			<PHP />
      			<WordPress />
      		</HorizontalScroll>
      </RelatedWork>
    )
  }
}

export default TheVanBurenPHX;