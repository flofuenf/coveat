import React, {useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function NonShipmentSwitch(props) {
    const [state, setState] = React.useState({
        shipment: props.isNonShipping,
    });

    useEffect(() => {
        setState({ ...state, shipment: props.isNonShipping});
    }, [props.isNonShipping, state]);

    const handleChange = (event) => {
        props.nonShippingSwitched(event.target.checked);
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