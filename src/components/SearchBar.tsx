import React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function CustomizedInputBase() {
    return (
        <Paper
            component="form"
            sx={{p: '2px 0px', display: 'flex', alignItems: 'center', width: 780, height: 'fit-content', marginTop: 50 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <Button disabled>Clear</Button>
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
