import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Button } from '@mui/material'
import React from 'react'

interface DropdownWrapperProps {
    title: string
}

export const DropdownWrapper: React.FC<DropdownWrapperProps> = ({ title }) => {
    return (
        <div>
            <Button
            id='dropdown-button'
            aria-haspopup='true'
            variant='outlined'
            disableElevation
            endIcon={<KeyboardArrowDownIcon />}
            style={{
                borderColor: "rgba(0, 0, 0, 0.23)",
                color: "rgba(0,0,0,0.87)",
                textTransform: "none",
                fontWeight: 400

            }}
            >
                {title}
            </Button>
        </div>
    )
}