import React from "react";
import styled from "styled-components";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const StyledFormControl = styled(FormControl)`
  &.MuiFormControl-root {
      min-width: 200px;
  }
`;

export default function CitySelection() {
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <StyledFormControl>
                <InputLabel id="demo-simple-select-label">Stadt auswählen</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Bad Säckingen</MenuItem>
                    <MenuItem value={20}>Murg</MenuItem>
                </Select>
            </StyledFormControl>
        </div>
    );
}