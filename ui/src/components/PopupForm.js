import React from "react";
import PropTypes from "prop-types";
import { useTheme, withStyles, makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Box from "@material-ui/core/Box";
import Login from "./Login";
import SignUp from "./Signup";

const ColorTabs = withStyles({
  // root: {
  //   borderBottom: "1px solid #e8e8e8",
  // },
  indicator: {
    backgroundColor: "#21174a",
  },
})(Tabs);

const ColorTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#21174a",
      opacity: 1,
    },
    "&$selected": {
      color: "#21174a",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#21174a",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function PopupForm() {
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <ColorTabs
          value={value}
          onChange={handleChange}
          aria-label="Sign Up /Sign In Nav"
          variant="fullWidth"
        >
          <ColorTab label="Sign Up" />
          <ColorTab label="Sign In" />
        </ColorTabs>
      </div>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <SignUp />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Login />
      </TabPanel>
    </div>
  );
}
