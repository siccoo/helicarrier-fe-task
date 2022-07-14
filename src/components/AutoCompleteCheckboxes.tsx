import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import TextField from "@mui/material/TextField";
import { Autocomplete, Checkbox } from "@mui/material";
import * as React from "react";
import { Key } from "@mui/icons-material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

interface AutoCompleteProps {
    options: Array<Option>
}

interface Option {
    title: string
}

export const AutoCompleteCheckboxes: React.FC<AutoCompleteProps> = ({ options }) => {
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={[]}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="Search Options"
            )}
        />
    )
}