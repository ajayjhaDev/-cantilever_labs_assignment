import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: number
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt Market", `Shopping`, "13 Dec 2020", 24),
  createData("Ice cream sandwich Market", `Shopping`, "13 Dec 2020", 37),
  createData("Eclair", "Food", "13 Dec 2020", 24),
  createData("Cupcake", "Sport", "13 Dec 2020", 67),
  createData("Gingerbread", "Shoping", "13 Dec 2020", 49),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <h4 className="p-2">Transactions history</h4>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Reciever</TableCell>
            <TableCell align="right" className="cl-tb">
              Type
            </TableCell>
            <TableCell align="right" className="cl-tb">
              Date
            </TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" className="cl-tb">
                {row.calories}
              </TableCell>
              <TableCell align="right" className="cl-tb">
                {row.fat}
              </TableCell>
              <TableCell align="right">{`$${row.carbs}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
