import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Button, Menu, MenuProps, styled } from '@mui/material'
import React from 'react'

const StyledMenu = styled((props: MenuProps) => (
    <Menu 
    elevation={0}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
    }}
    {...props}
    />
))

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