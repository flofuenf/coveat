import React from "react";
import CitySelection from "../components/CitySelection";
import styled from "styled-components";
import ShipmentSwitch from "../components/ShipmentSwitch";
import Overview from "../components/Overview";
import NonShipmentSwitch from "../components/NonShipmentSwitch";

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
        isNonShipping: false,
        cityProviders: {
            "1": {
                shippingProviders: [
                    {
                        id: "s1",
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    },
                    {
                        id: "s2",
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    },
                    {
                        id: "s3",
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    },
                    {
                        id: "s4",
                        name: 'Pizzeria Gabriele',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    }
                ],
                nonShippingProviders: [
                    {
                        id: "ns1",
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
                        id: "s1",
                        name: 'Pizzeria Test Name 123',
                        addressLine1: 'Teststrasse 1',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 12345',
                        overviewPictureUrl: 'https://i.ibb.co/x2ZYmj9/gabriele.jpg',
                    }
                ],
                nonShippingProviders: [
                    {
                        id: "ns1",
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
        setState({...state, isShipping: isShipping, isNonShipping: state.isNonShipping ? false : state.isNonShipping});
    };
    const nonShippingSwitched = (isNonShipping) => {
        setState({...state, isNonShipping: isNonShipping, isShipping: state.isShipping ? false : state.isShipping});
    };

    const getProviders = (selectedCity, shipping, nonShipping) => {
        const providers = state.cityProviders[selectedCity];
        if (!shipping && !nonShipping) {
            return providers && providers.shippingProviders
                .map(nsp => ({...nsp, isShipping: true}))
                .concat(providers.nonShippingProviders
                    .map(nsp => ({...nsp, isShipping: false})),
                );
        }
        if (shipping) {
            return providers && providers.shippingProviders.map(nsp => ({...nsp, isShipping: true}));
        } else {
            return providers && providers.nonShippingProviders.map(nsp => ({...nsp, isShipping: false}));
        }
    };

    return (
        <div>
            <Centered>{CitySelection(cities, citySelected)}</Centered>
            <Centered>
                <ShipmentSwitch isShipping={state.isShipping} shippingSwitched={shippingSwitched}></ShipmentSwitch>
            </Centered>
            <Centered>
                <NonShipmentSwitch isNonShipping={state.isNonShipping}
                                   nonShippingSwitched={nonShippingSwitched}></NonShipmentSwitch>
            </Centered>
            <Centered>
                {state.selectedCity && <Overview providers={getProviders(state.selectedCity, state.isShipping, state.isNonShipping)}></Overview>}</Centered>
        </div>
    );
}