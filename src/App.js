import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DataSecurity from "./pages/DataSecurity";
import {theme} from "./themes/theme"
import BasicAppBar from "./components/nav/AppBar";
import ProviderDetail from "./pages/ProviderDetail";
import $ from "jquery";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: null,
            arrowBack: false
        }
    }

    updateCities = (data) => {
        this.setState({cities: data})
    };

    getCities = () => {
        let updateCities = this.updateCities;
        $.ajax({
            url: "http://localhost:8000/cities",
            type: "GET",
            async: true,
            dataType: "json",
            success: function (data) {
                if (data.success === true) {
                    // console.log("Got Cities");
                    // console.log(data.result);
                    updateCities(data.result);
                } else {
                    console.log("Data, but no success...")
                }
            },
            fail: function () {
                console.log("Query failed.");
            }
        });
    };

    componentDidMount() {
        this.getCities();
    }

    render() {
        // console.log(this.state.cities);

        // const selectCity = (cityId) => {
        //     this.setState({...this.state, selectedCity: cityId})
        // };
        //
        // const shippingSwitched = (isShipping) => {
        //     this.setState({
        //         ...this.state,
        //         isShipping: isShipping,
        //         isNonShipping: this.state.isNonShipping ? false : this.state.isNonShipping
        //     });
        // };
        // const nonShippingSwitched = (isNonShipping) => {
        //     this.setState({
        //         ...this.state,
        //         isNonShipping: isNonShipping,
        //         isShipping: this.state.isShipping ? false : this.state.isShipping
        //     });
        // };
        //
        // const getProviders = (selectedCity, shipping, nonShipping) => {
        //     const providers = this.state.cityProviders[selectedCity];
        //     if (!shipping && !nonShipping) {
        //         return providers && providers.shippingProviders
        //             .map(nsp => ({...nsp, isShipping: true}))
        //             .concat(providers.nonShippingProviders
        //                 .map(nsp => ({...nsp, isShipping: false})),
        //             );
        //     }
        //     if (shipping) {
        //         return providers && providers.shippingProviders.map(nsp => ({...nsp, isShipping: true}));
        //     } else {
        //         return providers && providers.nonShippingProviders.map(nsp => ({...nsp, isShipping: false}));
        //     }
        // };

        const setArrowBack = () => {
            this.setState({arrowBack: !this.state.arrowBack})
        };

        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <BasicAppBar
                            arrowBack={this.state.arrowBack}
                            setDetailPage={setArrowBack}
                        />
                    {/*</div>*/}
                    {/*<div>*/}
                        <Route exact path='/' render={(props) =>
                            this.state.cities != null ?
                            <Home {...props}
                                  history={props.history}
                                  cities={this.state.cities}
                                  selectedCity={this.state.selectedCity}
                                  setArrowBack={setArrowBack}
                            /> : <h1>Loading</h1>}/>
                    {/*    <Route exact path='/:cityId/:id'*/}
                    {/*           render={(props) =>*/}
                    {/*               <ProviderDetail {...props}*/}
                    {/*                               provider={() => {*/}
                    {/*                                   let foundObject = undefined;*/}
                    {/*                                   if (props.match.params.cityId) {*/}
                    {/*                                       this.state.cityProviders[props.match.params.cityId].shippingProviders*/}
                    {/*                                           .concat(this.state.cityProviders[props.match.params.cityId].nonShippingProviders)*/}
                    {/*                                           .forEach(it => {*/}
                    {/*                                               if (it.id === props.match.params.id) {*/}
                    {/*                                                   foundObject = it;*/}
                    {/*                                               }*/}
                    {/*                                           });*/}
                    {/*                                   }*/}
                    {/*                                   return foundObject;*/}
                    {/*                               }}/>}/>*/}
                        <Route exact path='/security' component={DataSecurity}/>
                        <Route exact path='/about' component={About}/>
                    </div>
                </MuiThemeProvider>
            </div>


        );
    }
}
