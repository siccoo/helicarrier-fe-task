import * as React from "react";
import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";
import Paper from "@mui/material";

interface DataTableProps {
    columns: Array<string>,
    data: Array<Transaction>
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map((column: string) => {
                                return (
                                    <TableCell key={column} align="right">{column}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((row: Transaction) => {
                            <TableRow
                                key={row.transaction_name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.transaction_name}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.transaction_vendor}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}