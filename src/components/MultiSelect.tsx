import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import {useState} from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface MultiSelectChipProps {
    title: string,
    list: Array<string>
}

export const MultiSelectChip: React.FC<MultiSelectChipProps> = ({title, list}) => {
    const [filterName, setFilterName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof filterName>) => {
        const { target: { value } } = event;
        setFilterName(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    return (
        <FormControl sx={{ m: 1, width: 100 }}>
            <InputLabel id="demo-label">{title}</InputLabel>
            <Select
                labelId='demo-label'
                id='demo-multi-select'
                multiple
                autoWidth
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
                MenuProps={MenuProps}
            >
                {list.map((name) => (
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