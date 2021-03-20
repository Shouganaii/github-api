
import './App.css';
import Navbar from '../src/components/NavBar/index'
import { connect, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

function App() {
  const { user_data: { id } } = useSelector(state => state.user)
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* faz um componente aqui */}
      {!id ? 'Procure por um usuário do github e liste seus repositorios!'
        :
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"

        >
          
        </Grid>
      }



    </div>
  );
}

export default connect(null, null)(App);
