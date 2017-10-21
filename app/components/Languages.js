import React, { Component } from 'react'
import ItemInfoSubRouter from './ItemInfoSubRouter'
import Navigation from './Navigation'
import SubSection from './SubSection'

import ObjectiveC from './items/Objective-C'
import CSS from './items/CSS'
import PHP from './items/PHP'
import JavaScript from './items/JavaScript'

import English from './items/English'
import French from './items/French'

const selectedClass = "isSelected";

class Languages extends Component {
  render() {
    return (
      <section id="languages" className={this.props.match.params.item ? selectedClass : ""}>
        <h1 className="landmark">Languages</h1>
        <Navigation>
          <SubSection header="Computer">
            <CSS/>
            <ObjectiveC/>
            <PHP/>
            <JavaScript/>
          </SubSection>
          <SubSection header="Spoken">
            <English/>
            <French/>
          </SubSection>
        </Navigation>
        <ItemInfoSubRouter />
      </section>
    );
  }
}


// module.exports = App;
export default Languages;