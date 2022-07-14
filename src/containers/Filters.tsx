import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import MultiSelectChip from '../components/MultiSelect';
import { RangeSlider } from '../components/RangeSlider';
import { DropdownWrapper } from '../components/DropdownWrapper';
import "../styles/filters.css"

export const Filters = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '600px',
                backgroundColor: 'white',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: "1px"
            }}
        >
            <div className='filtersContainer'>
                <MultiSelectChip />
                <DropdownWrapper title='Dropdown Menu' />
            </div>

            <RangeSlider />
            <Button disabled>Clear All</Button>

        </Box>
    )
}