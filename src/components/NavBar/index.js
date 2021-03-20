import React from 'react';
import { AppBar, Toolbar, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/github_api'

const Navbar = () => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    async function getUserInfo() {
        if (!user.name) return

        let { data, status } = await api.get(`users/${user.name}`)
        console.log(status)
        if (status === 200) {
            dispatch({ type: 'SAVE_USER_DATA', user_data: data })
        }

    }

    return (
        <AppBar position="static">
            <Toolbar>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    label="Nome do usuário"
                    name="Pesquisa"
                    onChange={(e) => dispatch({ type: 'SAVE_USER_NAME', name: e.target.value })}
                />
                <Button variant="outlined" color="info" size="large"
                    onClick={() => getUserInfo()}
                >
                    Pesquisar
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
