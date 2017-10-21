import React, { Component } from 'react'
import RelatedWork from "./RelatedWork"
import HorizontalScroll from './../HorizontalScroll'

import ObjectiveC from "./../items/Objective-C"
import XCode from "./../items/XCode"

import thumbNail from "./../images/previous-work/MathApp-icon.jpg";
import homeScreen from "./../images/previous-work/MathApp-home.jpg";

const name = 'Mental Math Trainer';
const role = "Creator";
const duration = "2 days";
const path = 'mental-math-trainer';
const size = 'small';

class MentalMathTrainer extends Component {
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
            <XCode />
          </HorizontalScroll>
      </RelatedWork>
    )
  }
}

export default MentalMathTrainer;