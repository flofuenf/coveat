import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProviderCard from "./ProviderCard";
import styled from "styled-components";


const StyledGrid = styled(Grid)`
  justify-content: center;
  display: block;
`;

export default function Overview(props) {
    return (
        <StyledGrid container spacing={2}>
            <Grid item>
                <Grid container justify="center" spacing={2}>
                    {props.providers && props.providers.map((value) => (
                        <Grid key={value.id} item>
                            { ProviderCard(value, value.isShipping) }
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </StyledGrid>
    );
}