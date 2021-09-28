import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, target, actual,ok,notOk) {
  return { name, target, actual,ok,notOk };
}

const rows = [
 
  createData('Driver Guard', 305, 37, 67, 43),
 
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Product </h3></TableCell>
            <TableCell align="right"><h3>Daily Target</h3></TableCell>
            <TableCell align="right"><h3>Actual</h3></TableCell>
            <TableCell align="right"><h3>Actual OK</h3></TableCell>
            <TableCell align="right"><h3>Actual Not OK</h3></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.target}</TableCell>
              <TableCell align="right">{row.actual}</TableCell>
              <TableCell align="right">{row.ok}</TableCell>
              <TableCell align="right">{row.notOk}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
