import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Chip from "@material-ui/core/Chip/Chip";
import Phone from '@material-ui/icons/Phone';
import {theme} from "../themes/theme";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ImageLoader from 'react-imageloader';
import {useHistory} from "react-router-dom";

const StyledCard = styled(Card)`
  width: 200px;
`;

const StyledImageLoader = styled(ImageLoader)`
  width: 100%;
  height: 150px;
`;

export default function ProviderCard(provider, cityID, setDetailPage) {
    const history = useHistory();

    function openDetailPage(link) {
        setDetailPage();
        history.push(link);
    }

    function openOffers(link){
       window.location.href = link
    }
    return (
        <StyledCard>
            <CardActionArea>
                <StyledImageLoader style={{backgroundColor: "lightGrey"}}
                    imgProps={{style: {height: 150, width: "100%"}}}
                    src={provider.imageURL}
                    wrapper={React.createFactory('div')}
                    preloader={() => <CircularProgress style={{marginTop: "30%"}}/>}>
                    Image load failed!
                </StyledImageLoader>
                <CardContent style={{height: 160}} onClick={() => openDetailPage("/" + cityID + "/" + provider.guid)}>
                    <div style={{flex: 1}}>
                        <Typography gutterBottom variant="h6" style={{fontSize: "1.3em", margin: 0}}>
                            {provider.name}
                        </Typography>
                        <br/>
                        <div style={{position: "absolute", bottom: 10, width: "85%"}}>
                            <Chip color="primary" label={provider.isShipping ? 'Lieferservice' : 'Selbstabholung'}/>
                            <br/>
                            <br/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {provider.street}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {provider.zip + " " + provider.city}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {provider.telephone}
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div style={{width: "100%"}}>
                    <Button size="medium" variant={"text"}
                            style={{marginRight: 12, fontWeight: "bold", color: theme.palette.secondary}}
                            onClick={() => openOffers(provider.offerUrl)}>
                        Angebote
                    </Button>
                    <Button style={{marginLeft: 12}}>
                        <a href={'tel://' + provider.phoneNumber}>
                            <Phone style={{color: "#00A203"}}/>
                        </a>
                    </Button>
                </div>
            </CardActions>
        </StyledCard>
    );
}