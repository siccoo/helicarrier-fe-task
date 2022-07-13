import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Filters = () => {
return(
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
        filters here
        <Button disabled></Button>

    </Box>
)
}