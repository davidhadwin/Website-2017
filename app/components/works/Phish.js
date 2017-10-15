import React, { Component } from 'react';
import RelatedWork from './RelatedWork';

import thumbNail from "./../images/previous-work/phish.jpg";

const name = 'Phish Tickets';
const path = 'phish';
const size = 'medium';

class Phish extends React.Component {
	render () {
    return (
      <RelatedWork name={name} path={path} thumbNail={thumbNail} size={size} url={this.props.url}>
        <p>While working for CvilleIT, I was contracted out to build this site for our client MusicToday which was in charge of Phish's ticketing site. This site was built following the clients design on top of a ModX CMS and fitted to be responsive. The highlight of this site is the custom built JavaScript horizontal/vertical carousel.</p>
      </RelatedWork>
    )
  }
}

export default Phish;