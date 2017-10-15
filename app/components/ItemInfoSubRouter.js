import React, { Component } from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import ObjectiveC from './items/Objective-C';
import CSS from './items/CSS';
import PHP from './items/PHP';
import English from './items/English'
import French from './items/French'


class ItemInfoSubRouter extends Component {
  render() {
  	return (
			<Switch>
				<Route path="/languages/css" component={CSS}/>
				<Route path="/languages/objective-c" component={ObjectiveC}/>
				<Route path="/languages/php" component={PHP} />
				<Route path="/languages/english" component={English} />
				<Route path="/languages/french" component={French} />
	    </Switch>
    )
  } 
}

export default ItemInfoSubRouter;