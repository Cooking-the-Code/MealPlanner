import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function OauthMenu() {
  const classes = useStyles();

  return (
    <Grid container className={classes.paper} spacing={3}>
      <Grid item xs>
        <a href="https://twitter.com/minimalmonkey" class="icon-button twitter">
          <i class="icon-twitter fa fa-twitter"></i>
          <span></span>
        </a>
      </Grid>
      <Grid item xs>
        <a href="https://facebook.com" class="icon-button facebook">
          <i class="icon-facebook fa fa-facebook"></i>
          <span></span>
        </a>
      </Grid>
      <Grid item xs>
        <a href="https://plus.google.com" class="icon-button google">
          <i class="icon-google fa fa-google"></i>
          <span></span>
        </a>
      </Grid>
    </Grid>
  );
}
