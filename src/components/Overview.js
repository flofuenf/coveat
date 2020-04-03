import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProviderCard from "./ProviderCard";

export default function Overview() {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Grid container justify="center" spacing={2}>
                    {[0, 1, 2, 3, 4, 5].map((value) => (
                        <Grid key={value} item>
                            { ProviderCard() }
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}