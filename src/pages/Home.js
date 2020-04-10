import React from "react";
import CitySelection from "../components/ui/CitySelection";
import ShipmentSwitch from "../components/ui/ShipmentSwitch";
import PickupSwitch from "../components/ui/NonShipmentSwitch";
import withStyles from "@material-ui/core/styles/withStyles";
import Overview from "../components/Overview";
import $ from "jquery";

const styles = theme => ({
    centered: {
        textAlign: "center",
        marginLeft: 70,
        marginRight: 70,
        marginTop: 30,
        marginBottom: 30,
    }
});

export default withStyles(styles)(class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: this.props.cities,
            providers: null,
            selectedCity: null,
            shippingFilter: false,
            pickupFilter: false,
        }
    }

    updateProviders = (data) => {
        this.setState({providers: data})
    };

    getProviders = () =>{
        let updateProviders = this.updateProviders.bind(this);
        $.ajax({
            url: "http://localhost:8000/providersByCity",
            type: "POST",
            data: JSON.stringify({"guid": this.state.selectedCity.guid}),
            async: true,
            dataType: "json",
            success: function (data) {
                if (data.success === true) {
                    updateProviders(data.result);
                } else {
                    console.log("Data, but no success...")
                }
            },
            fail: function () {
                console.log("Query failed.");
            }
        }).done((data) => {
            console.log(data)
        });
    };

    selectCity = (city) => {
        this.setState({selectedCity: city}, () => this.getProviders())
    };

    render() {

        const {classes} = this.props;

        const setShippingFilter = () => {
            this.setState({
                shippingFilter: !this.state.shippingFilter,
            })
        };

        const setPickupFilter = () => {
            this.setState({
                pickupFilter: !this.state.pickupFilter,
            })
        };


        return (
            <div className={classes.centered}>
                <CitySelection
                    cities={this.state.cities}
                    selectCity={this.selectCity.bind(this)}
                    selectedCity={this.state.selectedCity}/>
                <br/>
                <ShipmentSwitch shippingSwitched={this.state.shippingFilter} setFilter={setShippingFilter}/>
                <PickupSwitch pickupSwitched={this.state.pickupFilter}
                              setFilter={setPickupFilter}/>
                <br/>
                {this.state.selectedCity && <Overview
                    providers={this.state.providers}
                    cityID={this.state.selectedCity}
                    setArrowBack={this.props.setArrowBack}/>}
            </div>
        );
    }
})
