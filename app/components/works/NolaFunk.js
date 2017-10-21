import React, { Component } from 'react'
import RelatedWork from './RelatedWork'
import HorizontalScroll from './../HorizontalScroll'

import HTML from "./../items/HTML"
import CSS from "./../items/CSS"
import PHP from "./../items/PHP"
import WordPress from "./../items/Wordpress"

import thumbNail from "./../images/previous-work/nolafunk.jpg";

const name = 'Nola Funk';
const role = "Contract Front-End Developer";
const duration = "20hrs";
const site = "www.nolafunk.com"
const path = 'nolafunk';
const size = 'medium';

class NolaFunk extends React.Component {
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
      			<PHP />
      			<WordPress />
      		</HorizontalScroll>
      </RelatedWork>
    )
  }
}

export default NolaFunk;