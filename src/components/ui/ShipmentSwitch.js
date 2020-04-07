import React, {useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ShipmentSwitch(props) {
    const [state, setState] = React.useState({
        shipment: props.isShipping,
    });

    useEffect(() => {
        setState({ ...state, shipment: props.isShipping});
    }, [props.isShipping, state]);

    const handleChange = (event) => {
        props.shippingSwitched(event.target.checked);
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
                label="Lieferservice"
            />
        </div>
    );
}