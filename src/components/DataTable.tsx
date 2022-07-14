import * as React from "react";
import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";
import Paper from "@mui/material";

interface DataTableProps {
    columns: Array<string>,
    data: Array<Transaction>
}

