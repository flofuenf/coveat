import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function CitySelection(props) {
    const {cities, selectCity} = props;

    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
        selectCity(event.target.value);
    };

    return (
        <div>
            <FormControl>
                <InputLabel>
                    "Stadt auswählen"
                </InputLabel>
                <Select
                    value={city}
                    onChange={handleChange}
                >
                    {
                        cities.map(c => {
                            return (
                                <MenuItem key={c.guid} value={c}>{c.name}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}