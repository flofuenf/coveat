import React, {useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function NonShipmentSwitch(props) {
    const [state, setState] = React.useState({
        pickup: props.pickupFilter,
    });

    // useEffect(() => {
    //     setState({ shipment: props.shippingSwitched});
    //     setState({pickup: props.pickupFilter});
    // }, [props.pickupFilter]);

    const handleChange = (event) => {
        props.setFilter();
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={state.shipment ?  state.shipment : false}
                        onChange={handleChange}
                        name="shipment"
                        color="primary"
                    />
                }
                label="Selbstabholung"
            />
        </div>
    );
}