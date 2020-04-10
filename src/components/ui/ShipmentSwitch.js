import React, {useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ShipmentSwitch(props) {
    const [state, setState] = React.useState({
        shipment: props.shippingSwitched,
    });

    useEffect(() => {
        setState({ shipment: props.shippingSwitched});
    }, [props.shippingSwitched]);

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
                label="Lieferservice"
            />
        </div>
    );
}