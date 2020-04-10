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
            sortedProviders: null,
            selectedCity: null,
            shippingFilter: false,
            pickupFilter: false,
        }
    }

    updateProviders = (data) => {
        if(!data){
            return;
        }

        let sorted = [];
        console.log(data);

        if(this.state.shippingFilter || this.state.pickupFilter){
            for(let i=0; i<data.length; i++){
                if (this.state.shippingFilter && data[i].isShipping){
                    sorted.push(data[i])
                }else if(this.state.pickupFilter && data[i].isPickup) {
                    sorted.push(data[i]);
                }
            }
        }

        this.setState({providers: data ? data : this.state.providers, sortedProviders: sorted}, () => console.log(this.state))
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
        this.setState({selectedCity: city, providers: null}, () => this.getProviders())
    };

    render() {

        const {classes} = this.props;

        const setShippingFilter = () => {
            this.setState({
                shippingFilter: !this.state.shippingFilter,
            }, () => this.updateProviders(this.state.providers))
        };

        const setPickupFilter = () => {
            this.setState({
                pickupFilter: !this.state.pickupFilter,
            }, () => this.updateProviders(this.state.providers))
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
                    providers={this.state.sortedProviders}
                    cityID={this.state.selectedCity}
                    setArrowBack={this.props.setArrowBack}/>}
            </div>
        );
    }
})
