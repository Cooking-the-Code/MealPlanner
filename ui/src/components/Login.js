import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordConfirm: '',
			valid: true,
			submit: false,
		};
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	checkPassword = (event) => {
		event.preventDefault();
		this.state.password === this.state.passwordConfirm
			? this.setState({ valid: true, submit: true })
			: this.setState({ valid: false, submit: true });
	};

	render() {
		return (
			<div className='form'>
				<h1>Sign In</h1>
				<form onSubmit={this.checkPassword}>
					<input
						type='text'
						placeholder='Username'
						id='username'
						name='username'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<label htmlFor='username'>Username</label>

					<input
						type='password'
						placeholder='Password'
						id='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<label htmlFor='password'>Password</label>
					<button type='submit'>Login</button>
					{this.state.submit && (
						<p className={this.state.value ? 'valid' : 'invalid'}>
							{this.state.valid ? 'password matched' : 'password do not match'}
						</p>
					)}
					{!this.state.submit}
				</form>
			</div>
		);
	}
}

export default Login;
