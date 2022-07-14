import * as React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import TextField from "@mui/material/TextField";
import { Autocomplete, Checkbox } from "@mui/material";
import { padding } from "@mui/system";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

interface AutoCompleteProps {
    options: Array<string>
}

interface Option {
    title: string
}

export const AutoCompleteCheckboxes: React.FC<AutoCompleteProps> = ({ options }) => {
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={options}
            disableCloseOnSelect
            // getOptionLabel={option}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        value={option}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option}
                </li>
            )}
            style={{ width: 150, marginTop: '-70px', padding: "5px"}}
            renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="Search Options" />
            )}
        />
    )
}