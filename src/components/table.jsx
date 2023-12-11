import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { RUB } from "../utils";

export default function DenseTable({ ...props }) {
  const [rows, setRows] = useState([]);

  const [currentRate, setCurrentRate] = useState(null);

  useEffect(() => {
    if (props.coast) {
      setRows(
        Object.values(props.coast)
          .map((item) => ({
            Name: item.Name,
            ID: item.ID,
            Nominal: item.Nominal,
            CharCode: item.CharCode,
            Value: item.Value,
          }))
          .concat(RUB)
      );
    }
  }, [props.coast]);

  useEffect(() => {
    console.log(props, rows);
    if (props.selectedValue && rows.length !== 0) {
      setCurrentRate(rows.find((row) => row.ID === props.selectedValue.value)); //
    }
  }, [props.selectedValue, rows]);

  const calculateRate = (rowData) => {
    if (rowData && currentRate) {
      return (
        Number(rowData.Nominal) /
        ((Number(currentRate.Value) * Number(rowData.Nominal)) /
          (Number(rowData.Value) * Number(currentRate.Nominal)))
      ).toFixed(4);
    }
    return "";
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Валюта</TableCell>
            <TableCell align="right">Едениц</TableCell>
            <TableCell align="right">Буквенный код</TableCell>
            <TableCell align="right">Курс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ID}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Nominal}</TableCell>
              <TableCell align="right">{row.CharCode}</TableCell>
              <TableCell align="right">{calculateRate(row)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
