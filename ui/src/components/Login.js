import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { Link, Grid, TextField, Container, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import axios from 'axios';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/user/signin',
    {email, password})
    .then(token=> {
      //TODO: Pass token to the user, user will
      // local.setStorage(token);
    })
    .catch(err=> {
      //Todo: Error
    })
  }
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
          <CssTextField
            fullWidth
            required
            label="Email Address"
            variant="outlined"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={ e => setPassword(e.target.value)}
          />

          <Grid justify="flex-end" container>
            <Grid item>
              <Link href="#" variant="body2" color="inherit">
                Forgot password?
              </Link>
            </Grid>
          </Grid>

          <Box textAlign="center">
            <SubmitButton
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </SubmitButton>
          </Box>
        </form>
      </div>
    </Container>
  );
}
