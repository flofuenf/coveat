import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import SideBar from "./SideBar";

const Title = styled(Typography)`
  text-align: center;
`;
export default function BasicAppBar() {
    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = () => {
        setState({...state, open: !state.open});
    };

    return (
        <div>
            <SideBar
                toggleDrawer={toggleDrawer.bind(this)}
                open={state.open}
            />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer()}>
                        <MenuIcon/>
                    </IconButton>
                    <Title variant="h6">
                        Local Eats
                    </Title>
                </Toolbar>
            </AppBar>
        </div>
    );
}