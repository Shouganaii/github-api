
import './App.css';

import React from 'react';
import { connect } from 'react-redux';
import Repos from '../src/components/Repos/index'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import Navbar from '../src/components/NavBar/index'
import UserDrawer from '../src/components/UserDrawer/index'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 280,
  },
}));

function App() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>

      <Navbar handleDrawerOpen={handleDrawerOpen} open={open} />

      <UserDrawer handleDrawerClose={handleDrawerClose} open={open} />

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container} >
          <div className={classes.appBarSpacer} >
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={12}>
                <Paper >
                  <Repos />
                </Paper>
              </Grid>
            </Grid>            
          </div>
        </Container>
      </main>
    </div >
  );
}

export default connect(null, null)(App);
