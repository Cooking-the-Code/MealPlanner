import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#21174a",
      fontSize: "16px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "#21174a",
        fontSize: "18px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#21174a",
        fontSize: "18px",
      },
    },
  },
})(TextField);

const SubmitButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    color: "#21174a",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#f9a828",
    borderColor: "#f9a828",
    "&:hover": {
      backgroundColor: "#f9a828",
      borderColor: "#f9a828",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#f9a828",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "90%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <CssTextField
            fullWidth
            required
            label="Email Address"
            variant="outlined"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <br />
          <br />
          <br />
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Box textAlign="center">
            <SubmitButton
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </SubmitButton>
            {/* Link to terms to service agreements */}
            <p>
              By signing up, you are agreeing with Come To The Table's Terms and
              Service Agreements
            </p>
          </Box>
        </form>
      </div>
    </Container>
  );
}

//Sign up comp with more requirements

// class SignUp extends Component {
// 	constructor(props) {
// 	super(props);
// 	this.state = {
// 			firstName: '',
// 			lastName: '',
// 			email: '',
// 			username: '',
// 			password: '',
// 			passwordConfirm: '',
// 			valid: true,
// 			submit: false,
// 	};
// }
// handleChange = (event) => {
// 	this.setState({ [event.target.name]: event.target.value });
// };
// checkPassword = (event) => {
// 	event.preventDefault();
// 	this.state.password === this.state.passwordConfirm
// 		? this.setState({ valid: true, submit: true })
// 		: this.setState({ valid: false, submit: true });
// };

// render() {
// 	return (
// 		<div className='form'>
// 			<h1>Sign Up</h1>
// 			<form onSubmit={this.checkPassword}>
// 				<input
// 						type='text'
// 						placeholder='First Name'
// 						id='firstName'
// 						name='firstName'
// 						value={this.state.firstName}
// 						onChange={this.handleChange}
// 					/>
// 				<label htmlFor='firstName'>First Name</label>
// 				<input
// 						type='text'
// 						placeholder='Last Name'
// 						id='lastName'
// 						name='lastName'
// 						value={this.state.lastName}
// 						onChange={this.handleChange}
// 					/>
// 				<label htmlFor='lastName'>Last Name</label>
// 				<input
// 						type='text'
// 						placeholder='Email'
// 						id='email'
// 						name='email'
// 						value={this.state.email}
// 						onChange={this.handleChange}
// 					/>
// 				<label htmlFor='lastName'>Email</label>
// 				<input
// 						type='text'
// 						placeholder='Username'
// 						id='username'
// 						name='username'
// 						value={this.state.username}
// 						onChange={this.handleChange}
// 					/>
// 				<label htmlFor='username'>Username</label>

// 				<input
// 						type='password'
// 						placeholder='Password'
// 						id='password'
// 						name='password'
// 						value={this.state.password}
// 						onChange={this.handleChange}
// 					/>
// 				<label htmlFor='password'>Password</label>

// 				<input
// 						type='password'
// 						placeholder='Confirm password'
// 						id='passwordConfirm'
// 						name='passwordConfirm'
// 						value={this.state.passwordConfirm}
// 						onChange={this.handleChange}
// 					/>
// 				<label htmlFor='passwordConfirm'>Confirm password</label>

// 				<button type='submit'>Sign Up</button>
// 					{this.state.submit && (
// 						<p className={this.state.value ? 'valid' : 'invalid'}>
// 							{this.state.valid ? 'password matched' : 'password do not match'}
// 						</p>
// 					)}
// 					{!this.state.submit}
// 				</form>
// 			</div>
// 		);
// 	}
// }

// export default SignUp;
