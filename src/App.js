import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DataSecurity from "./pages/DataSecurity";
import {theme} from "./themes/theme"
import BasicAppBar from "./components/AppBar";

export default function App() {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <div>{BasicAppBar()}</div>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/security' component={DataSecurity}/>
                    <Route exact path='/about' component={About}/>
                </div>
            </MuiThemeProvider>
        </div>


    );
}
