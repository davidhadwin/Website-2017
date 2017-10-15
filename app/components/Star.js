import React, { Component } from 'react';
import SVGInline from "react-svg-inline";
import star from "./images/site-images/star.svg";

class Star extends Component {
  render() {
    console.log (this.props.rating);
    switch (this.props.rating) {
      case "1":
        return <span className="rating"> <SVGInline svg={ star } /> </span>
      case "2":
        return <span className="rating"> <SVGInline svg={ star } /> <SVGInline svg={ star } /> </span>
      case "3":
        return <span className="rating"> <SVGInline svg={ star } /> <SVGInline svg={ star } /> <SVGInline svg={ star } /> </span>
      case "4":
        return <span className="rating"> <SVGInline svg={ star } /> <SVGInline svg={ star } /> <SVGInline svg={ star } /> <SVGInline svg={ star } /> </span>
      case "5":
        return <span className="rating"> <SVGInline svg={ star } /> <SVGInline svg={ star } /> <SVGInline svg={ star } /> <SVGInline svg={ star } /> <SVGInline svg={ star } /></span>
      default: 
        return <span>No Rating</span>
    }
  }
}

export default Star;