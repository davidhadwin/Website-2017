import React, { Component } from 'react';
import RelatedWork from "./RelatedWork";

import thumbNail from "./../images/previous-work/MathApp-icon.jpg";
import homeScreen from "./../images/previous-work/MathApp-home.jpg";

const name = 'Mental Math Trainer';
const path = 'mental-math-trainer';
const size = 'small';

class MentalMathTrainer extends Component {
	render () {
    return (
      <RelatedWork name={name} path={path} thumbNail={thumbNail} size={size} side={this.props.side} url={this.props.url}>
        <p>Mental Math Trainer (MMT) was my second app. I created it one weekend after reading a book about the brains potential to do complicated mathematics without pencil and paper (What was this book called again?). After searching the Apple App Store for a good training app, and only finding ones capable of helping 5th graders, I decided to make my own. MMT allows a user to choose between addition, subtraction, multiplication, division or a random combination of all four and choose the size (in digits) of the test problems. This allowed MMT to cater to a broad range of users, from beginners to savants. At the time of creation, MMT was pushing the limits of 32bit architecture. However, with the announcement of 64bit architecture, MMT is a little out of date. Mental Math Trainer became a big thing for a while in Japan, topping out at 500 downloads/day.</p>
        <hr/>
        <div className="related-work-extras">
          <img src={homeScreen} alt="Mental Math Trainer"/>
        </div>
      </RelatedWork>
    )
  }
}

export default MentalMathTrainer;