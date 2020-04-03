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
    return (
        <div>
            <Typography variant={"h1"}>Home</Typography>
            <Centered>{ CitySelection() }</Centered>
            <Centered>{ ShipmentSwitch() }</Centered>
            <Centered>{ Overview() }</Centered>
        </div>
    );
}