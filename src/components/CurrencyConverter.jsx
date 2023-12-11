import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ComboBox from "./CompliteBox";
import DenseTable from "./table";
import { src, RUB, RUB_LABEL } from "../utils";


function CurrencyConverter() {
  const [coast, setCoast] = useState([]);
  const [selectedValue, setSelectedValue] = useState(RUB_LABEL);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      setCoast(data.data.Valute);
      setCurrencies(
        Object.values(data.data.Valute)
          .map((item) => ({
            label: item.Name,
            value: item.ID,
          }))
          .concat([RUB_LABEL])
      );
    });
  }, []);

  const changeValue = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
   <ComboBox currencies={currencies} changeValue={changeValue}></ComboBox>
     <DenseTable coast={coast} selectedValue={selectedValue} />
    </div>
  );
}

export default CurrencyConverter;
