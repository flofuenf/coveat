import React from "react";
import Typography from "@material-ui/core/Typography";
import CitySelection from "../components/CitySelection";
import styled from "styled-components";
import ShipmentSwitch from "../components/ShipmentSwitch";
import Overview from "../components/Overview";

const Centered = styled.div`
  text-align: center;
`;

export default function Home() {
    const cities = [
        {
            id: "1",
            name: 'Bad Säckingen',
        },
        {
            id: "2",
            name: 'Murg',
        }
    ];
    const [state, setState] = React.useState({
        selectedCity: undefined,
        isShipping: false,
        cityProviders: {
            "1": {
                shippingProviders: [
                    {
                        id: 1,
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                    }
                ],
                nonShippingProviders: [
                    {
                        id: 2,
                        name: 'Pizzeria Gabriele 2',
                        addressLine1: 'Teststrasse 2',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                    }
                ]
            }
        }
    });

    const citySelected = (cityId) => {
        setState({...state, selectedCity: cityId})
    };

    const getProviders = (selectedCity, shipping) => {
        const providers = state.cityProviders[selectedCity];
        return shipping ? providers && providers.shippingProviders : providers && providers.nonShippingProviders;
    };

    return (
        <div>
            <Typography variant={"h1"}>Home</Typography>
            <Centered>{ CitySelection(cities, citySelected) }</Centered>
            <Centered>{ ShipmentSwitch() }</Centered>
            <Centered>{ state.selectedCity && Overview(getProviders(state.selectedCity, state.isShipping)) }</Centered>
        </div>
    );
}