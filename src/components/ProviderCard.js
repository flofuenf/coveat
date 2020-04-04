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
import Phone from '@material-ui/icons/Phone';


const StyledCard = styled(Card)`
  width: 200px;
`;

export default function ProviderCard(provider, isShipping) {
    return (
        <StyledCard>
            <CardActionArea>
                <CardMedia
                    style={{height: 0, paddingTop: '56.25%'}}
                    image={provider.overviewPictureUrl}
                    title="Contemplative Reptile"
                />
                <CardContent style={{height: 150}}>
                    <Typography gutterBottom variant="h6" component="h2">
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
                <Button>
                    <a href={'tel://' + provider.phoneNumber}>
                        <Phone color="primary"/>
                    </a>
                </Button>
            </CardActions>
        </StyledCard>
    );
}