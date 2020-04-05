import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SecurityIcon from '@material-ui/icons/Security';
import ContactIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom";

function SideMenu(props) {
    const history = useHistory();

    function navigateTo(link) {
        history.push(link);
        props.toggleDrawer()
    }

    return (
        <div>
            <List>
                <ListItem button onClick={() => navigateTo("/")}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button onClick={() => navigateTo("/security")}>
                    <ListItemIcon><SecurityIcon/></ListItemIcon>
                    <ListItemText>Datenschutz</ListItemText>
                </ListItem>
                <ListItem button onClick={() => navigateTo("about")}>
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <ListItemText>Impressum</ListItemText>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button onClick={() => navigateTo("")}>
                    <ListItemIcon><ContactIcon/></ListItemIcon>
                    <ListItemText>Kontakt</ListItemText>
                </ListItem>
            </List>
        </div>
    );
}

export default function SideBar(props) {
    return (
        <React.Fragment>
            <Drawer variant={"temporary"} anchor={'left'} open={props.open} onClose={() => props.toggleDrawer()}>
                <div role="presentation">
                    <SideMenu toggleDrawer={props.toggleDrawer}/>
                </div>
            </Drawer>
        </React.Fragment>
    );
}

