
import React from 'react';
import './App.css';


export default class Email extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			confirmEmail: ""
		};
	}

	emailChange(e) {
		this.setState({ email: e.target.value });
	}

	confirmEmailChange(e) {
		this.setState({ confirmEmail: e.target.value });
	}

	render() {
		return(
			<div>
				<input
					className="email"
					type="email"
					value={this.state.email}
					onChange={(e) => this.emailChange(e)}
				/>
				<input
					className="confirmEmail"
					type="confirmEmail"
					value={this.state.confirmEmail}
					onChange={(e) => this.confirmEmailChange(e)}
				/>
				<label>{
					this.state.email === this.state.confirmEmail ?
						"Great! Emails match" :
						"Oh! Emails do not match!" 
				}</label>
			</div>
		);
	}
}