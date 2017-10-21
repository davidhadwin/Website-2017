import React, { Component } from 'react'
import { hashHistory, Switch, Route, NavLink, Link } from 'react-router-dom'
import CloseButton from "./../items/CloseButton"

class Small extends Component {
  render () {
    return (
        <div className={"related-work " + this.props.props.size}>
      		<Link className="related-work-toggle" to={this.props.match.url + "/" + this.props.props.path}>
      			<img src={this.props.props.thumbNail} alt={this.props.props.name}/>
      		</Link>
    		</div>
    );
  }
}

class Expanded extends Component {
  render () {
    var currentPathName = window.location.href;
    var currentRoute = currentPathName.split('#').pop();
    var lastRoute = currentRoute.split('/');
    lastRoute.pop();
    lastRoute = lastRoute.join('/');
    
  	return (
  	   <div className={"related-work " + this.props.props.size}>
    		<Link className="related-work-toggle active" to={ lastRoute }>
    			<img src={this.props.props.thumbNail} alt={this.props.props.name}/>
    		</Link>
    		<div className="related-work-detail">
          <CloseButton previous={true}/>
          <header>
            <h1>{this.props.props.name}</h1>
            <p className="no-marg-bot"><a href={this.props.props.site} target="_new">{this.props.props.site}</a></p>
            <p className="role no-marg-bot">{ this.props.props.role }</p>
            <p className="duration">{ this.props.props.duration}</p>
          </header>
          {this.props.children}
        </div>
  		</div>
  	);
  }
}

class RelatedWork extends Component {
	render () {
    return (
      <Switch>
        <Route path={this.props.url + "/" + this.props.path} render={(props) => 
          <Expanded props={this.props} {...props}>
            {this.props.children}
          </Expanded>
        } />
        <Route path={this.props.url} render={(props) => 
          <Small props={this.props} {...props}/>} />
      </Switch>
    )
	}
}

export default RelatedWork;