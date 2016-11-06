import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/main");
		}
	}

	handleDemo(e){
		e.preventDefault();
		this.props.login({user:{username:'guest', password:'password' }})
		this.redirectIfLoggedIn()
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let header;
		if (this.props.formType === 'login'){
			header = 'Login'
		}else {
			header= 'Sign Up'
		}
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<br/>

				{this.renderErrors()}
					<div className="login-form">
						<br/>
						<h2 className='signup-or-login'>{header}</h2>
						<label className='signup-or-login'>Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label className='signup-or-login'> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input className='button' type="submit" value="Submit" />
					</div>
				</form>
				<br></br>
				<input className='button' type= "submit" value="Demo" onClick={this.handleDemo}/>
			</div>
		);
	}

}

export default withRouter(SessionForm);
