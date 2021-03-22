import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemText, Link, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(0),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
}));



const UserDrawer = ({ handleDrawerClose, open }) => {

    const classes = useStyles();

    const user = useSelector(state => state.reducer.user_data)

    return (
        <Drawer
            variant="permanent"
            classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
            open={open}
        >

            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose} color="primary">
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            {!user.login ?
                '' :
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Usuário"
                            secondary={user.login}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Bio"
                            secondary={
                                <Typography
                                    noWrap
                                >
                                    {user.bio}
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Usuário desde"
                            secondary={new Date(user.created_at).toLocaleDateString()}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Email"
                            secondary={user.email}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Número de seguidores"
                            secondary={user.followers}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Seguindo"
                            secondary={user.following}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Reside em"
                            secondary={user.location}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Perfil"
                            secondary={
                                <Link href={user.html_url} variant="body2">
                                    {user.html_url}
                                </Link>
                            }
                        />
                    </ListItem>
                </List>
            }
        </Drawer>

    )
}

export default UserDrawer;
