import React, {useEffect} from "react";
import CitySelection from "../components/ui/CitySelection";
import ShipmentSwitch from "../components/ui/ShipmentSwitch";
import Overview from "../components/Overview";
import NonShipmentSwitch from "../components/ui/NonShipmentSwitch";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    centered: {
        textAlign: "center",
        marginLeft: 70,
        marginRight: 70,
        marginTop: 30,
        marginBottom: 30,
    }
});

export default withStyles(styles)(function Home(props) {
    const {classes} = props;

    const [state, setState] = React.useState({
        cities: props.cities,
        selectedCity: props.selectedCity,
        isShipping: props.isShipping,
        isNonShipping: props.isNonShipping,
    });


    useEffect(() => {
        setState({
            ...state,
            cities: props.cities,
            selectedCity: props.selectedCity,
            isShipping: props.isShipping,
            isNonShipping: props.isNonShipping,
        });
    }, [props]);

    return (
        <div className={classes.centered}>
            {CitySelection(state.cities, props.selectCity, props.selectedCity)}
            <br/>
            <ShipmentSwitch isShipping={state.isShipping} shippingSwitched={props.shippingSwitched}/>
            <NonShipmentSwitch isNonShipping={state.isNonShipping}
                               nonShippingSwitched={props.nonShippingSwitched}/>
            <br/>
            {props.selectedCity && <Overview
                providers={props.getProviders(state.selectedCity, state.isShipping, state.isNonShipping)}
                cityID={props.selectedCity}
                setDetailPage={props.setDetailPage}/>}
        </div>
    );
})
