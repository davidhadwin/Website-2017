import React, { Component } from 'react';
import RelatedWork from './RelatedWork'

import thumbNail from "./../images/previous-work/acac.jpg";

const name = 'ACAC';
const size = 'medium';
const path = 'acac';

class Acac extends React.Component {
	render () {
    return (
      <RelatedWork name={name} path={path} thumbNail={thumbNail} size={size} url={this.props.url}>
        <p>While working for CvilleIT (Charlottesville, VA), I was contracted out to work with StoryWare (Richmond, VA) which was building a website for ACAC and was looking for a CSS/SASS/HTML guru to implement their bold design. The site was built off of Wordpress (PHP) and the project was developed using Composer (dependency management), Compass (CSS/SASS authoring), Bower (package management), Gulp (SASS compiler) with a Git repo (versioning). We built this site using modular/component based SASS. The project lasted ~2.5 months.</p>
      </RelatedWork>
    )
	}
}

export default Acac;