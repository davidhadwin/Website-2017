import React, { Component } from 'react';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: "Contact Me",
			email: "d@vid.h@dwin_me.com",
			showEmail: false
		}
		// this.decodeEmail = this.decodeEmail.bind(this);
		// this.sendMail = this.sendEmail.bind(this);
	}
	// showEmail() {
	// 	this.setState({showEmail: !this.state.showEmail});
	// 	this.state.showEmail ? this.sendEmail() : console.log(this.state.showEmail + ' not allowed');
	// }

	// sendEmail () {
	// 	document.location.href = "mailto:" + this.decodeEmail();
	// }

	// decodeEmail () {
	// 	var b = this.state.email;
	// 	b = b.replace(/@/gi, 'a');
	// 	b = b.replace(/_/gi, '@');
	// 	return b;
	// }

	decodeEmail () {
		var b = "d@vid.h@dwin_me.com";
		b = b.replace(/@/gi, 'a');
		b = b.replace(/_/gi, '@');
		document.location.href = "mailto:" + b;
	}

	render () {
		return (
			<section id="intro">
        <h1>Need some help?</h1>
        <div className="button-container">
        	<button className="hireMe" onClick={this.decodeEmail}>{this.state.placeholder}</button>
        </div>
      </section>
		)
	}
}

export default Contact;