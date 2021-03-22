import React from 'react';
import { AppBar, Toolbar, TextField, Button, withStyles } from '@material-ui/core';
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
        paddingRight: 24
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
const ColorButton = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: '#3f51b5',
        '&:hover': {
            backgroundColor: 'white',
            color: '#3f51b5',
        },
    },
}))(Button);


const Navbar = ({ handleDrawerOpen, open }) => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const user = useSelector(state => state.reducer)

    async function getUserInfo() {

        if (!user.name) return

        let { data, status } = await api.get(`users/${user.name}`)

        if (status === 200) {
            dispatch({ type: 'SAVE_USER_DATA', user_data: data })
            handleDrawerOpen()
        }

        let { data: data_repo, status: status_repo } = await api.get(`users/${user.name}/repos`)

        if (status_repo === 200) {
            dispatch({ type: 'SAVE_REPOSITORIES', repositories: data_repo })
        }

    }

    return (
        <CssBaseline >
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}
                style={{
                    background: 'white'
                }}
            >
                <Toolbar className={classes.toolbar}>

                    <IconButton
                        edge="start"
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <TextField
                        style={{
                            width: '100%',
                            height: '90%',
                            margin: 10,
                            color: 'white'
                        }}
                        variant="outlined"
                        margin="normal"
                        required
                        id="user"
                        label="Procure por um usuário do github e liste seus repositorios!"
                        name="Pesquisa"
                        onChange={(e) => dispatch({ type: 'SAVE_USER_NAME', name: e.target.value })}
                    />

                    <ColorButton variant="outlined" color="info" size="large"
                        style={{
                            width: '30%',
                        }}
                        onClick={() => getUserInfo()}
                    >
                        Pesquisar
                    </ColorButton>


                </Toolbar>
            </AppBar>
        </CssBaseline >
    )
}

export default Navbar;
