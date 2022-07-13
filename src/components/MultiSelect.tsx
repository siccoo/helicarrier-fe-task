import { FormControl, InputLabel } from '@mui/material';
import * as React from 'react';


export default function MultiSelectChip() {
    const [filterName, setFilterName] = React.useState<string[]>([])
    return (
        <FormControl sx={{ m: 1, width: 100 }}>
            <InputLabel id="demo-label">Multi Select</InputLabel>
        </FormControl>
    )
}