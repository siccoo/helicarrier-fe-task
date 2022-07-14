import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';

const names = [
    'Filter Option 1',
    'Filter Option 2',
    'Filter Option 3',
    'Filter Option 4'
]

export default function MultiSelectChip() {
    const [filterName, setFilterName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof filterName>) => {
        const { target: { value } } = event;
        setFilterName(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    return (
        <FormControl sx={{ m: 1, width: 100 }}>
            <InputLabel id="demo-label">Multi Select</InputLabel>
            <Select
                labelId='demo-label'
                id='demo-multi-select'
                multiple
                value={filterName}
                onChange={handleChange}
                input={<OutlinedInput id='select-multiple' label="chip" />}
                renderValue={(selected) => (
                    <Box
                        sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
                    >
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}