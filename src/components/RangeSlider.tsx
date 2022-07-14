import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export const RangeSlider = () => {
  const [value, setValue] = useState<number []>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
        <Slider  
        getAriaLabel={() => 'slider'}
        value={value} 
        onChange={handleChange} 
        valueLabelDisplay="auto"
        />
    </Box>
  );
}