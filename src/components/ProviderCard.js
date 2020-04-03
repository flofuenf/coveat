import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Chip from "@material-ui/core/Chip/Chip";


const StyledCard = styled(Card)`
  max-width: 400px;
`;

export default function ProviderCard(provider, isShipping) {
    return (
        <StyledCard>
            <CardActionArea>
                <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {provider.name}
                    </Typography>
                    <Chip color="primary" label={isShipping ? 'Lieferservice' : 'Selbstabholung'}/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {provider.addressLine1}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {provider.addressLine2}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {provider.phoneNumber}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Speisekarte
                </Button>
            </CardActions>
        </StyledCard>
    );
}