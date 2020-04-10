import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from "./SideBar";
import ContactDialog from "../Contact";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";

export default function BasicAppBar(props) {
    const [state, setState] = React.useState({
        open: false,
        dialog: false,
    });

    const history = useHistory();

    const dialogOpen = () => {
        setState({...state, dialog: true});
    };
    const dialogClose = () => {
        setState({...state, dialog: false});
    };

    const toggleDrawer = () => {
        setState({...state, open: !state.open});
    };

    const goBack = () => {
        props.setDetailPage();
        history.goBack();
    };

    return (
        <div>
            <ContactDialog
                dialogOpen={dialogOpen.bind(this)}
                dialogClose={dialogClose.bind(this)}
                dialog={state.dialog}
            />
            <SideBar
                toggleDrawer={toggleDrawer.bind(this)}
                dialogOpen={dialogOpen.bind(this)}
                open={state.open}
            />
            <AppBar position="static">
                <Toolbar>
                    {props.arrowBack ?
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => goBack()}>
                            <ArrowBackIcon/>
                        </IconButton> :
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer()}>
                            <MenuIcon/>
                        </IconButton>}
                    <Typography variant="h6" style={{textAlign: "center"}}>
                        Local Eats
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}