import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import {theme} from "./themes/theme"
import BasicAppBar from "./components/AppBar";

export default function App() {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <div>{BasicAppBar()}</div>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/test1' component={Test1}/>
                    <Route exact path='/test2' component={Test2}/>
                </div>
            </MuiThemeProvider>
        </div>


    );
}
