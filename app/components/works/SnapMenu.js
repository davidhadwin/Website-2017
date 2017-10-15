import React, { Component } from 'react';
import RelatedWork from './RelatedWork';

import thumbNail from "./../images/previous-work/SnapMenu-icon.jpg";

const name = "SnapMenu";
const path = "snapmenu";
const size = "small";

class SnapMenu extends React.Component {
	render () {
    return (
      <RelatedWork name={name} path={path} thumbNail={thumbNail} size={size} side={this.props.side} url={this.props.url}>
        <p>SnapMenu was my first iPhone app and was created by necessity from my impending graduation from Lynchburg College. To graduate with a Computer Science degree, one needed to create a usable program instead of a thesis. Understanding the technology trends and understanding that Apple, and it's apps, where going to be the next big thing, I decided to teach myself how to program for iPhone. After brainstorming with a friend of a friend, we came up with an idea that came into a space that had not been touched in the iOS environment, and idea now known as "Foodspotting". The difficulty was that none of my professors knew anything about the language or IDE (Integrated Development Environment), called XCode. Therefore, everything I learned, I taught myself through books, online tutorials as well as questions on StackOverflow. This project encompassed more than just Objective-C but also required use of a back end powered by a MySQL database and numerous PHP endpoints. After graduating I continued development for a couple of months and realized that this was actually a good idea. A week later, a Google Incubator backed project called "Foodspotting" was released with substantially more resources and manpower than just myself. SnapMenu, therefore, achieved a meager adoption rate of ~20 downloads/day but became the stepping stone to my iOS develpment career.</p>
      </RelatedWork>
    )
  }
}

export default SnapMenu;