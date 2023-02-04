import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  //Write your code here
  const [val, setVal] = useState({
    id: "1",
    name: "Robin",
    designation: "scientist"
  });
  fetch("http://localhost:3000/?id=1&name=Robin&designation=scientist")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setVal((val) => {
        return { ...val, data };
      });
    });
  return (
    <>
      <div className="details">{`Employee ${val.id} named ${val.name} works as ${val.designation}`}</div>
    </>
  );
};

export default App;
