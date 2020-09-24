import React, { Component } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import logo from "../assets/greenMealPlanIcon.svg";
import familyTable from "../assets/familyTable.jpg";
import PopupModal from "../components/PopupModal";

class Hero extends Component {
  render() {
    return (
      <Container
        style={{ margin: "0", padding: "0", border: "5px solid blue" }}
      >
        <Typography component="div" style={{ height: "100vh" }}>
          <AppBar position="static" style={{ backgroundColor: "#e00543" }}>
            <Toolbar>
              <Grid container justify="space-between" alignItems="center">
                <img src={logo} className="App-logo" alt="awesome-cool-logo" />
                {/* Popup Modal for sign in and sign up */}
                <PopupModal />
              </Grid>
            </Toolbar>
          </AppBar>
          <Container>
            {/* <img src={familyTable} style={{width: '125wh', height: '90vh'}}/> */}
            <Typography
              component="div"
              style={{
                color: "#84253e",
                fontSize: "4rem",
                textAlign: "center",
                margin: "auto",
                paddingTop: 100,
              }}
            >
              Power statement
            </Typography>
            <Typography
              component="div"
              style={{
                color: "#84253e",
                fontSize: "4rem",
                textAlign: "center",
                margin: "auto",
              }}
            >
              Power statement
            </Typography>
            <Typography
              component="div"
              style={{
                color: "#84253e",
                fontSize: "4rem",
                textAlign: "center",
                margin: "auto",
                paddingBottom: 100,
              }}
            >
              Power statement
            </Typography>
          </Container>
          <Grid container justify="center" alignItems="center">
            <Button
              color="primary"
              variant="contained"
              style={{
                background: "#e00543",
                color: "#eee",
                fontSize: "1.6rem",
              }}
            >
              CTA
            </Button>
          </Grid>
        </Typography>
      </Container>
    );
  }
}

export default Hero;
