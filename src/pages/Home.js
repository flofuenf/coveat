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
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    },
                    {
                        id: 2,
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    },
                    {
                        id: 3,
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    },
                    {
                        id: 4,
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    }
                ],
                nonShippingProviders: [
                    {
                        id: 1,
                        name: 'Pizzeria Gabriele 2',
                        addressLine1: 'Teststrasse 2',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    }
                ]
            },
            "2": {
                shippingProviders: [
                    {
                        id: 1,
                        name: 'Pizzeria Test Name 123',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    }
                ],
                nonShippingProviders: [
                    {
                        id: 1,
                        name: 'Bäckerei Test',
                        addressLine1: 'Teststrasse 2',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    }
                ]
            }
        }
    });

    const citySelected = (cityId) => {
        setState({...state, selectedCity: cityId})
    };

    const shippingSwitched = (isShipping) => {
        setState({...state, isShipping})
    };

    const getProviders = (selectedCity, shipping) => {
        const providers = state.cityProviders[selectedCity];
        return shipping ? providers && providers.shippingProviders : providers && providers.nonShippingProviders;
    };

    return (
        <div>
            <Centered>{ CitySelection(cities, citySelected) }</Centered>
            <Centered>{ ShipmentSwitch(state.isShipping, shippingSwitched) }</Centered>
            <Centered>{ state.selectedCity && Overview(getProviders(state.selectedCity, state.isShipping), state.isShipping) }</Centered>
        </div>
    );
}