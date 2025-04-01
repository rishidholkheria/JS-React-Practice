import React, { useEffect, useState } from "react";

const TemperatureConvert = () => {
  const [source, setSource] = useState("celsius");
  const [destination, setDestination] = useState("kelvin");
  const [temperature, setTemperture] = useState(null);
  const [ans, setAns] = useState(null);
  const [clicked, setClicked] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    if(temperature)
    {if (source === "celsius") {
      if (destination === "kelvin") {
        const val = temperature + 273;
        setAns(val);
      } else if (destination === "fahren") {
        const val = (9 / 5) * temperature + 32;
        console.log("val", val);
        setAns(val);
      } else {
        setError("Same Units added!");
      }
    } else if (source === "kelvin") {
      if (destination === "celsius") {
        setAns(temperature - 273);
      } else if (destination === "fahren") {
        const cel = ((temperature - 32) * 5) / 9;
        const val = cel - 273;
        setAns(val);
      } else {
        setError("Same Units added!");
      }
    } else {
      if (destination === "celsius") {
        setAns(((temperature - 32) * 5) / 9);
      } else if (destination === "kelvin") {
        const cel = ((temperature - 32) * 5) / 9;
        // setAns()
      } else {
        setError("Same Units added!");
      }
    }}else{
        setError("Please Enter value");
    }
  }, [destination, clicked]);

  //   const changeTemp = (inputVal) => {
  //     if (source === "celsius") {
  //       if (destination === "kelvin") {
  //         const val = inputVal + 273
  //         setAns(val);
  //       } else if (destination === "fahren") {
  //         const val = (9 / 5) * inputVal + 32;
  //         console.log('val', val);
  //         setAns(val);
  //       } else {
  //         setError("Same Units added!");
  //       }
  //     } else if (source === "kelvin") {
  //       if (destination === "celsius") {
  //         setAns(inputVal - 273);
  //       } else if (destination === "fahren") {
  //         const cel = (inputVal - 32) * 5 / 9
  //         const val = cel - 273;
  //         setAns(val);
  //       } else {
  //         setError("Same Units added!");
  //       }
  //     } else {
  //       if (destination === "celsius") {
  //         setAns((inputVal - 32) * 5 / 9);
  //       } else if (destination === "kelvin") {
  //         const cel = (inputVal - 32) * 5 / 9;
  //         // setAns()
  //       } else {
  //         setError("Same Units added!");
  //       }
  //     }
  //   };

  const handleInputChange = (e) => {
    e.preventDefault();
    setTemperture(e.target.value);
  };

  const handleOnChangeSource = (e) => {
    e.preventDefault();
    console.log("source", source);
    setSource(e.target.value);
  };

  const handleOnChangeDest = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
    console.log("destination", destination);
  };

  const handleSubmit = () => {
    console.log("ans", ans);
    setClicked(true);
    // changeTemp(temperature);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-evenly",
        }}
      >
        <label>Src Unit</label>
        <select value={source} onChange={handleOnChangeSource}>
          <option value={"celsius"}>Celsius</option>
          <option value={"fahren"}>Fahrenheit</option>
          <option value={"kelvin"}>Kelvin</option>
        </select>

        <label>Dest Unit</label>
        <select value={destination} onChange={handleOnChangeDest}>
          <option value={"celsius"}>Celsius</option>
          <option value={"fahren"}>Fahrenheit</option>
          <option value={"kelvin"}>Kelvin</option>
        </select>
      </div>
      <div>
        <input
          placeholder="Enter your input"
          value={temperature}
          onChange={handleInputChange}
        />
        <p>{ans}</p>
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <p>{error}</p>
    </div>
  );
};

export default TemperatureConvert;
