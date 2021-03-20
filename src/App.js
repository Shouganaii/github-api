
import './App.css';
import Navbar from '../src/components/NavBar/index'
import { connect, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
function App() {
  const user = useSelector(state => state.user)
  return (
    <div className="App">
      <Navbar></Navbar>
      <Grid>Ihul</Grid>
      <Grid>Ihul</Grid>
    </div>
  );
}

export default connect(null, null)(App);
