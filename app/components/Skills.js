import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import Hex from "./Hex"

import SVGInline from "react-svg-inline";


const selectedClass = "isSelected";

class Skills extends Component {
  render() {
    // Put Javascript here

    return (
        <section id="skills" className={this.props.match.params.item ? selectedClass : ""}>
          <h1>Skills</h1>
          <div className="slider-container">
            <div className="hex-section">
              <h2>Computer</h2>
              <div className="hex-container">
                
              </div>
               { this.props.match.params.item &&  <h2>Other</h2> }
               <div className="hex-container">
                
              </div>
            </div>
          </div>
          <div className="hex-info-container">
            <div className="hex-info">
              <h1>{ this.props.match.params.item }</h1>
              <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc nulla, euismod ac massa commodo, cursus maximus eros. In hac habitasse platea dictumst. Nam et maximus est, vel cursus augue. Cras dolor orci, malesuada et turpis et, laoreet venenatis ligula. Donec ut est justo. Pellentesque sed cursus leo. Nullam posuere lobortis sapien, at porttitor turpis faucibus vestibulum. Vestibulum ut consectetur erat, ut dapibus erat. Quisque vel consequat libero, nec pulvinar est. Morbi sit amet tempor velit. Proin vel lacinia risus. Aenean pretium suscipit lectus. Vestibulum vitae maximus lacus. Morbi mattis eu nisl et lobortis. Donec aliquam sem at bibendum sagittis. Quisque nec urna diam.

Cras libero dui, auctor nec enim a, vestibulum tincidunt lacus. Vestibulum viverra ante sit amet ipsum sodales placerat. Donec vel accumsan neque. Cras in ipsum in tellus efficitur sagittis at eget dolor. Aenean tincidunt pharetra viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus tincidunt lacus eget commodo. Praesent luctus finibus rutrum. Proin cursus vel nibh vitae suscipit.

Mauris imperdiet magna eu semper porta. Integer accumsan nulla magna, ac consequat libero ultricies vel. Praesent non orci ac quam aliquam commodo in nec mi. Sed eu neque faucibus, molestie quam a, lacinia ligula. Praesent nisl eros, ultrices quis dolor bibendum, volutpat lobortis mi. Phasellus eu nisi tortor. Donec id venenatis nulla. Integer gravida rutrum enim, nec posuere turpis. Phasellus non elit arcu. Aenean at molestie odio, vitae dignissim erat.</p>
              </div>
            </div>
            <hr/>
            <div className="hex-related-work-container">
              <h1>Related Works</h1>
              <div className="hex-related-works">

              </div>
            </div>
          </div>
        </section>
    );
  }
}


// module.exports = App;
export default Skills;