import React, {useEffect} from "react";
import CitySelection from "../components/CitySelection";
import styled from "styled-components";
import ShipmentSwitch from "../components/ShipmentSwitch";
import Overview from "../components/Overview";
import NonShipmentSwitch from "../components/NonShipmentSwitch";

const Centered = styled.div`
  text-align: center;
`;

export default function Home(props) {
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
        <div>
            <Centered>{CitySelection(state.cities, props.citySelected)}</Centered>
            <Centered>
                <ShipmentSwitch isShipping={state.isShipping} shippingSwitched={props.shippingSwitched}/>
            </Centered>
            <Centered>
                <NonShipmentSwitch isNonShipping={state.isNonShipping}
                                   nonShippingSwitched={props.nonShippingSwitched}/>
            </Centered>
            <Centered>
                {state.selectedCity && <Overview
                    selectedCity={state.selectedCity}
                    history={props.history}
                    providers={props.getProviders(state.selectedCity, state.isShipping, state.isNonShipping)}/>}</Centered>
        </div>
    );
}