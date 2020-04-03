import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ShipmentSwitch(isShipping, shippingSwitched) {
    const [state, setState] = React.useState({
        shipment: isShipping,
    });

    const handleChange = (event) => {
        shippingSwitched(event.target.checked);
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={state.shipment}
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