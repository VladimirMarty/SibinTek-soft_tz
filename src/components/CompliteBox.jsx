import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { RUB_LABEL } from "../utils";


export default function ComboBox({ ...props }) {
  return (
 
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(event, newValue) => props.changeValue(newValue)}
      defaultValue={RUB_LABEL}
      options={props.currencies}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Базовая валюта" />}
    />
   
  );
}
