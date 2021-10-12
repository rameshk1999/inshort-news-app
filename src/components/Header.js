import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// import sidebar
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoTitle: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function DenseAppBar({ setCategory }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <Sidebar setCategory={setCategory} />

          <img
            className={classes.logoTitle}
            src="https://www.inshorts.com/dist/images/home_page/logo.png"
            alt="inshorts"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
