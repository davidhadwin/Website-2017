import React, { Component } from 'react';
import { hashHistory, Switch, Route, NavLink, Link } from 'react-router-dom';

class Small extends Component {
  render () {
    return (
        <div className={"related-work " + this.props.size}>
      		<Link className="related-work-toggle" to={this.props.match.url + "/" + this.props.path}>
      			<img src={this.props.thumbNail} alt={this.props.name}/>
      		</Link>
    		</div>
    );
  }
}

class Expanded extends Component {
  render () {
  	return (
  	   <div className={"related-work " + this.props.size}>
    		<a className="related-work-toggle active" onClick={this.props.history.goBack}>
    			<img src={this.props.thumbNail} alt={this.props.name}/>
    		</a>
    		<div className="related-work-detail">
          <h1>{this.props.name}</h1>
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
          <Expanded name={this.props.name} thumbNail={this.props.thumbNail} size={this.props.size} side={this.props.side} {...props}>
            {this.props.children}
          </Expanded>
        } />
        <Route path={this.props.url} render={(props) => 
          <Small name={this.props.name} thumbNail={this.props.thumbNail} size={this.props.size} path={this.props.path} {...props}/>} />
      </Switch>
    )
	}
}

export default RelatedWork;