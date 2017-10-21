import React, { Component } from 'react'
import RelatedWork from './RelatedWork'
import HorizontalScroll from './../HorizontalScroll'

import Bower from "./../items/Bower"
import Git from "./../items/Git"
import Gulp from "./../items/Gulp"
import HTML from "./../items/HTML"
import SASS from "./../items/SASS"
import CSS from "./../items/CSS"
import PHP from "./../items/PHP"
import WordPress from "./../items/Wordpress"

import thumbNail from "./../images/previous-work/acac.jpg";

const name = 'ACAC';
const role = "Contract Front-End Developer";
const duration = "~2.5 months";
const site = "www.acac.com"
const size = 'medium';
const path = 'acac';

class Acac extends React.Component {
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
      			<SASS />
      			<HTML />
      			<Bower />
      			<Git />
      			<Gulp />
      			<PHP />
      			<WordPress />
      		</HorizontalScroll>
      </RelatedWork>
    )
	}
}

export default Acac;