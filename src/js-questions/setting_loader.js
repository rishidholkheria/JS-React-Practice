import { useState } from "react";

const handleOnSubmit = async () => {
  const [loader, setLoader] = useState(false);
  setLoader(true);

  //API Call
  var photoDetails = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "PhotoName",
      size: "Size",
    }),
  };

  try {
    var response = await fetch("https://url.com", photoDetails);
    var resp = await response.json();
    console.log("resp", resp);
  } 
  catch(error) {
    console.error(error);
  } 
  finally{
    //This will occur anyways
    setLoader(false);
  }
};

const uploadPhoto = () => {
  return (
    <div>
      <h1>Upload Photo</h1>
      <button onClick={() => handleOnSubmit} disabled={loader}>
        {" "}
        //disabled when loading
        {loader ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};
