import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { alpha, Box, Button, Menu, MenuProps, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'

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
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: "rgba(0,0,0,0.6)",
        boxShadow: "rgba(255, 255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px 1px,",
        "& .MuiMenu-list": {
            padding: "4px 0"
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.secondary,
                marginRight: theme.spacing(1.5)
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                )
            }
        }
    }
}))

interface DropdownWrapperProps {
    title: string,
    children: JSX.Element[] | JSX.Element
}

export const DropdownWrapper: React.FC<DropdownWrapperProps> = ({ title, children }) => {
    const [anchorEl, setAnchorEl] = useState<any>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                id='dropdown-button'
                aria-haspopup='true'
                variant='outlined'
                disableElevation
                onClick={handleClick}
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
            <StyledMenu
                id="demo-menu"
                MenuListProps={{
                    "aria-labelledby": "dropdown-menu"
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Box>{children}</Box>
            </StyledMenu>
        </div>
    )
}