import React, { Component } from 'react'
import RelatedWork from "./RelatedWork"
import HorizontalScroll from './../HorizontalScroll'

import ObjectiveC from "./../items/Objective-C"
import PHP from "./../items/PHP"
import MySQL from "./../items/MySQL"
import XCode from "./../items/XCode"

import thumbNail from "./../images/previous-work/SnapMenu-icon.jpg";

const name = "SnapMenu";
const role = "Creator";
const duration = "~6 months";
const path = "snapmenu";
const size = "small";

class SnapMenu extends React.Component {
	render () {
    return (
      <RelatedWork 
        name={name}
        role={role}
        duration={duration}
        path={path} 
        thumbNail={thumbNail} 
        size={size} 
        url={this.props.url}>
          <HorizontalScroll header="Tools & Languages Used">
            <ObjectiveC />
            <PHP />
            <MySQL />
            <XCode />
          </HorizontalScroll>
      </RelatedWork>
    )
  }
}

export default SnapMenu;