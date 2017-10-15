import React, { Component } from 'react';
import RelatedWork from './RelatedWork';

import thumbNail from "./../images/previous-work/thevanburenphx.jpg";

const name = 'The Van Buren PHX';
const path = 'thevanburenphx';
const size = 'medium';

class TheVanBurenPHX extends React.Component {
	render () {
    return (
      <RelatedWork name={name} path={path} thumbNail={thumbNail} size={size} url={this.props.url}>
        <p>I was subcontracted by CvilleIT (Charlottesville, VA) to build this site from scratch following the clients design on top of Wordpress (PHP) for a venue in Phoenix, AR. The site was built responsive and required ~25hrs.</p>
      </RelatedWork>
    )
  }
}

export default TheVanBurenPHX;