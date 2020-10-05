import React from "react";
import Button from "@material-ui/core/Button";
import { Link, Grid, TextField, Container, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#21174a",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "#21174a",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#21174a",
      },
    },
  },
})(TextField);

const SubmitButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#21174a",
    borderColor: "#21174a",
    "&:hover": {
      backgroundColor: "#f9a828",
      borderColor: "#f9a828",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#f9a828",
      borderColor: "#f9a828",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
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

          <Grid justify="flex-end" container>
            <Grid item>
              <Link href="#" variant="body2">
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
          <Grid justify="flex-end" container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
