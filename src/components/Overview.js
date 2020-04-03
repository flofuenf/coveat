import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProviderCard from "./ProviderCard";
import styled from "styled-components";


const StyledGrid = styled(Grid)`
  justify-content: center;
`;

export default function Overview(providers) {
    return (
        <StyledGrid container spacing={2}>
            <Grid item>
                <Grid container justify="center" spacing={2}>
                    {providers && providers.map((value) => (
                        <Grid key={value} item>
                            { ProviderCard(value) }
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </StyledGrid>
    );
}