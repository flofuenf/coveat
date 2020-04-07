import React from "react";
import CitySelection from "../components/ui/CitySelection";
import styled from "styled-components";
import ShipmentSwitch from "../components/ui/ShipmentSwitch";
import Overview from "../components/Overview";
import NonShipmentSwitch from "../components/ui/NonShipmentSwitch";

const Centered = styled.div`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default function Home() {
    const cities = [
        {
            id: "1",
            name: 'Wehr',
        },
        {
            id: "2",
            name: 'Bad Säckingen',
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
                        name: 'Pizza Jet',
                        addressLine1: 'Wehratalstraße 98',
                        addressLine2: '79664 Wehr-Öflingen',
                        phoneNumber: '+49 7761 936868',
                        overviewPictureUrl: 'https://www.dropbox.com/s/f40frhceyu3gcby/overview.jpg?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
                    },
                    {
                        id: "s2",
                        name: 'Ristorante zum Wehratal',
                        addressLine1: 'Todtmooser Straße 52',
                        addressLine2: '79664 Wehr',
                        phoneNumber: '+49 7762 8058335',
                        overviewPictureUrl: 'https://www.dropbox.com/s/14rksaj9b1exyo7/overview.jpg?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
                    },
                ],
                nonShippingProviders: [
                    {
                        id: "ns1",
                        name: 'Bäckerei Albiez',
                        addressLine1: 'Haupstraße 22',
                        addressLine2: '79664 Wehr',
                        phoneNumber: '+49 7762 8706',
                        overviewPictureUrl: 'https://www.dropbox.com/s/ie9wi4nfzamgnd1/overview.jpg?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
                    },
                    {
                        id: "ns2",
                        name: 'Bäckerei Fricker',
                        addressLine1: 'Hauptstraße 33',
                        addressLine2: '79664 Wehr',
                        phoneNumber: '+49 7762 3203',
                        overviewPictureUrl: 'https://www.dropbox.com/s/9i1po5wf0g59occ/overview.jpg?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
                    },
                    {
                        id: "ns3",
                        name: 'Gasthaus Krone',
                        addressLine1: 'Hauptstraße 72',
                        addressLine2: '79664 Wehr',
                        phoneNumber: '+49 7762 807171',
                        overviewPictureUrl: 'https://www.dropbox.com/s/id48jcoaom9t0b9/overview.jpg?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
                    }
                ]
            },
            "2": {
                shippingProviders: [
                    {
                        id: "s1",
                        name: 'Ristorante Pizzeria Da Gabriele',
                        addressLine1: 'Schaffhauser Straße 55',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 8732',
                        overviewPictureUrl: 'https://www.dropbox.com/s/kedzzjb06gd4g12/overview.jpg?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
                    },
                    {
                        id: "s2",
                        name: 'Pizza Venedig',
                        addressLine1: 'Schaffhauser Straße 73',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 5566630',
                        overviewPictureUrl: 'https://www.dropbox.com/s/zssyvgg7dv57mkj/overview.png?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
                    }
                ],
                nonShippingProviders: [
                    {
                        id: "ns1",
                        name: 'Hotel Restaurant Kater Hiddigeigei',
                        addressLine1: 'Tanzenplatz 2',
                        addressLine2: '79713 Bad Säckingen',
                        phoneNumber: '+49 7761 556440',
                        overviewPictureUrl: 'https://www.dropbox.com/s/g0mlevz3r784vlw/overview.jpg?raw=1',
                        offerUrl: 'https://www.dropbox.com/s/1hq5gopzwp2ulc6/sample.pdf?raw=1',
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
        <Centered>
            {CitySelection(cities, citySelected)}
            <br/>
            <ShipmentSwitch isShipping={state.isShipping} shippingSwitched={shippingSwitched}/>
            <NonShipmentSwitch isNonShipping={state.isNonShipping}
                               nonShippingSwitched={nonShippingSwitched}/>
            <br/>
            {state.selectedCity && <Overview
                providers={getProviders(state.selectedCity, state.isShipping, state.isNonShipping)}/>}
        </Centered>
    );
}