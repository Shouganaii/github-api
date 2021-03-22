import React from 'react';
import { AppBar, Toolbar, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/github_api'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    }
}));

const Navbar = ({ handleDrawerOpen, open }) => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const user = useSelector(state => state.reducer)

    async function getUserInfo() {

        if (!user.name) return

        let { data, status } = await api.get(`users/${user.name}`)

        if (status === 200) {
            dispatch({ type: 'SAVE_USER_DATA', user_data: data })
        }

        let { data: data_repo, status: status_repo } = await api.get(`users/${user.name}/repos`)

        if (status_repo === 200) {
            dispatch({ type: 'SAVE_REPOSITORIES', repositories: data_repo })
        }

    }

    return (
        <CssBaseline >
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>

                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="Procure por um usuário do github e liste seus repositorios!"
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
        </CssBaseline >
    )
}

export default Navbar;
