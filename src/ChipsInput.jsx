import React, { useState } from "react";

function ChipsInput() {
  const [val, setVal] = useState("");
  const [chips, setChips] = useState([]);

  const onChangleHandle = (e) => {
    setVal(e.target.value);
  };

  const handleRemove = (index) => {
    console.log("Before ->",chips)
    const updatedChips = chips.filter((chipVal, chipIndex) => chipIndex !== index);
    setChips(updatedChips);
    console.log(updatedChips)
  };

  const keyPress = (e) => {
    if (e.key == "Enter") {
      if (val !== "") {
        setChips([...chips, val]);
        setVal("");
        console.log(chips);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onKeyDown={keyPress}
        onChange={onChangleHandle}
        value={val}
      />
      <div style={{ display: "flex", width: "80vw", marginTop: "5px" }}>
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              margin: "3px",
              backgroundColor: "#d3d3d3",
              padding: "4px 6px",
              borderRadius: "8px",
              display: "flex",
              minWidth: "30px",
              color: "black"
            }}
          >
            <p style={{ marginRight: "5px" }}>{chip}</p>
            <p onClick={() => handleRemove(index)}>X</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
