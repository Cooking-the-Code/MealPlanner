import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PopupForm from "./PopupForm";
import OauthMenu from "./OauthMenu";
import Divider from "@material-ui/core/Divider";
import DividerWithText from "./DividerWithText";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/featured?food)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function PopupModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#a6cd12", fontSize: "1.2rem" }}
        onClick={handleClickOpen}
      >
        Sign In / Sign Up
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"md"} // 'sm' || 'md' || 'lg' || 'xl'
        onClose={handleClose}
        aria-labelledby="Sign Up / Sign In form"
        open={open}
      >
        <DialogTitle
          id="Sign Up/Sign In Form"
          onClose={handleClose}
        ></DialogTitle>
        <DialogContent>
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={3} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} elevation={6} square="true">
              <PopupForm />

              <DividerWithText>Or</DividerWithText>

              <OauthMenu />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
