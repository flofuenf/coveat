import React from "react";
import styled from "styled-components";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const StyledFormControl = styled(FormControl)`
  &.MuiFormControl-root {
      min-width: 250px;
  }
`;

export default function CitySelection(cities, selectedCity) {
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        selectedCity(event.target.value);
        setCity(event.target.value);
    };

    return (
        <div>
            <StyledFormControl>
                <InputLabel>Stadt auswählen</InputLabel>
                <Select
                    value={city}
                    onChange={handleChange}
                >
                    {
                        cities.map(c => {
                            return (
                                <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                            )
                        })
                    }
                </Select>
            </StyledFormControl>
        </div>
    );
}