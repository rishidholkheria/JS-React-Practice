import React, { use, useEffect, useState } from "react";
import Card from "./Card";


const data = [
  {
    id: 1,
    name: "DogeCoin",
    symbol: "$",
    value: 100,
    quantity: 0,
  },
  {
    id: 2,
    name: "Seranium",
    symbol: "@",
    value: 150,
    quantity: 0,
  },
  {
    id: 3,
    name: "Bitcoin",
    symbol: "&",
    value: 180,
    quantity: 0,
  },
];

const headings = ["Name", "Value", "Quanity", "Total"];

const CoinMart = () => {
    
  const [total, setTotal] = useState(0);
  const handleAdd = (id, quant) => {
    console.log("HI");
    data.map((item, key) => {
      if (item.id === id) {
        item.quantity = parseInt(item.quantity) + parseInt(quant);
        setTotal(total+item.value);
      }
    });
    console.log(data);
  };


  return (
    <div>
      <div style={{ display: "flex", padding: "5px" }}>
        {data.map((item, key) => (
          <Card
            id={item.id}
            name={item.name}
            symbol={item.symbol}
            value={item.value}
            handleAdd={handleAdd}
          />
        ))}
      </div>
      <table>
        {headings.map((head, key) => (
          <th style={{ width: "300px" }}>{head}</th>
        ))}
        {data.map((val, key) => (
          <tr>
            <td>{val.name}</td>
            <td>{val.value}</td>
            <td>{val.quantity}</td>
            <td>{val.value * val.quantity}</td>
          </tr>
        ))}
      </table>
      <p>{total}</p>
    </div>
  );
};

export default CoinMart;
