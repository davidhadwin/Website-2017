import React, { Component } from 'react';
import RelatedWork from './RelatedWork';

import thumbNail from "./../images/previous-work/nolafunk.jpg";

const name = 'Nola Funk';
const path = 'nolafunk';
const size = 'medium';

class NolaFunk extends React.Component {
	render () {
    return (
      <RelatedWork name={name} path={path} thumbNail={thumbNail} size={size} url={this.props.url}>
        <p>I was subcontracted by CvilleIT (Charlottesville, VA) to create this and a twin CEG Presents. The goal was to use an existing theme built by GrokWorks (Waynesboro, VA) and make it theme-able using CSS by extracting colors to the top of the file (requested by client) so that development time could be saved for all subsequent sites. The site was built off of Wordpress (PHP) and took  ~20hrs to style to be responsive and theme-able.</p>
      </RelatedWork>
    )
  }
}

export default NolaFunk;