import React from 'react';
import '../../App.css';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton } from "@material-ui/core";
import { SortIcon } from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    fontFamily: "Nunito', sans-serif",
  },
  icon: {
    color: "#fff",
    fontSize: "3rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <ToolBar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Derby League WA</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </ToolBar>
      </AppBar>
    </div>
  );
}
