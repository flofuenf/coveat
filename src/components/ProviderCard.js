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
                    style={{height: 0, paddingTop: '140px'}}
                    image={provider.overviewPictureUrl}
                    title="Overview Image"
                />
                <CardContent style={{height: 160}}>
                    <div style={{flex: 1}}>
                        <Typography gutterBottom variant="h6" style={{fontSize: "1.3em", margin: 0}}>
                            {provider.name}
                        </Typography>
                        <br/>
                        <div style={{position: "absolute", bottom: 10, width: "85%"}}>
                            <Chip color="primary" label={isShipping ? 'Lieferservice' : 'Selbstabholung'}/>
                            <br/>
                            <br/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {provider.addressLine1}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {provider.addressLine2}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {provider.phoneNumber}
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" color="primary">
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