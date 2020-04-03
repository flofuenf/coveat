import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ShipmentSwitch() {
    const [state, setState] = React.useState({
        shipment: true,
    });

    const handleChange = (event) => {
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