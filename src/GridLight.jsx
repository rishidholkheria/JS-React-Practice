import React, { useEffect, useState } from "react";
import "./GridLight.css";
import GridLightLayout from "./GridLightLayout";

const GridLight = () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const [selectOrder, setSelectOrder] = useState([]);
  const [active, setActive] = useState(true);

  const [deactivating, setDeactivating] = useState(false);

  //   const handleOnClick = (cellIndex) => {
  //     if (!selectOrder.includes(cellIndex)) {
  //       let newArr = selectOrder   -------> THIS WAY NEWARR POINTS TO SAME MEMORY(selectOrder)
  //       newArr.push(cellIndex)     -------> New ARRAY IS NOT CREATED (in terms of memory location)
  //       console.log(newArr)
  //       setSelectOrder(newArr)
  //     }
  //     console.log(selectOrder)
  //   };

  debugger
  useEffect(() => {
    if (
      matrix.flat().filter((cell) => cell === 1).length ===
        selectOrder.length &&
      !deactivating
    ) {
      setActive(false);
      setDeactivating(true);

      //Deactivating...
      const interval = setInterval(() => {
        setSelectOrder((prev) => {
          const updated = [...prev];
          updated.pop();

          if (updated.length === 0) {
            clearInterval(interval);
          }

          return updated;
        });
      }, 1000);
    }
  }, [selectOrder, active]);

  const handleOnClick = (cellIndex) => {
    if (!selectOrder.includes(cellIndex)) {
      const newArr = [...selectOrder, cellIndex]; // <--- make a NEW array
      setSelectOrder(newArr); // <--- React will now detect change
    }
  };

  return (
    <div className="gridLight">
      <h1>GridLight</h1>
      {console.log(selectOrder.length)}
      {console.log(
        "MATRIX ",
        matrix.flat().filter((cell) => cell === 1).length
      )}
      <div className="gridBoard">
        {matrix.flat(1).map((cell, index) => (
          <GridLightLayout
            key={index}
            cellVal={cell}
            cellIndex={index}
            handleOnClick={handleOnClick}
            selectOrder={selectOrder}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};

export default GridLight;
