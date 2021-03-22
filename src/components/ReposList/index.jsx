import React from 'react';
import { Table, TableBody, TableCell, TableRow, TableHead, IconButton, Box, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
const ReposList = () => {

    const repositories = useSelector(state => state.reducer.repositories)

    return (
        <React.Fragment>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell size="medium">Nome</TableCell>
                        <TableCell size="medium">Descrição</TableCell>
                        <TableCell size="medium">Criado em:</TableCell>
                        <TableCell size="medium"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repositories.map((row) => (<Row key={row.id} row={row} />))}
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    console.log(row)
    return (
        <React.Fragment>
            <TableRow key={row.id}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell size="medium">{row.name}</TableCell>
                <TableCell size="medium">{row.description}</TableCell>
                <TableCell size="medium">{new Date(row.created_at).toLocaleDateString()}</TableCell>
                <TableCell size="medium">
                    <IconButton color="inherit" onClick={() => openInNewTab(row.html_url)}>
                        <GitHubIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                {row.name}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Usuário"
                                            secondary={row.owner.login}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Linguagem"
                                            secondary={row.language}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Estrelas"
                                            secondary={row.stargazers_count}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Último push"
                                            secondary={new Date(row.pushed_at).toLocaleDateString()}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Status"
                                            secondary={row.disbaled ? 'Inativo' : 'Ativo'}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Número de forks"
                                            secondary={row.forks_count}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Homepage:"
                                            secondary={row.homepage}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Descrição:"
                                            secondary={row.description}
                                        />
                                    </ListItem>
                                </List>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default ReposList;