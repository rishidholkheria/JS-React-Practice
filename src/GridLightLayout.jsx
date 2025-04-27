import React, { useEffect, useState } from "react";
import "./GridLightLayout.css";

const GridLightLayout = ({ cellVal, cellIndex, handleOnClick, selectOrder, active }) => {
    
    const [selected, setSelected] = useState()
    useEffect(() => {
        setSelected(selectOrder.includes(cellIndex))
    },[selectOrder])
    
  return (
    <div
      onClick={() => handleOnClick(cellIndex)}
      className="gridCell"
      style={
        cellVal
          ? { backgroundColor: selected ? "#00FF00" : "#ffffff" }
          : { backgroundColor: "inherit", border: "none" }
      }
    >
    </div>
  );
};

export default GridLightLayout;
