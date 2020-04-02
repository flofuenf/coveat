import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Link, Route} from "react-router-dom";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import {theme} from "./themes/theme"
import Typography from "@material-ui/core/Typography";

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Link to="/"><Typography variant={"h5"}>Home</Typography></Link>
                    <Link to="/test1"><Typography variant={"h5"}>Test1</Typography></Link>
                    <Link to="/test2"><Typography variant={"h5"}>Test2</Typography></Link>
                </div>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/test1' component={Test1}/>
                    <Route exact path='/test2' component={Test2}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
