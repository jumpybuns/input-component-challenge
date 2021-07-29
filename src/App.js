import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="container">
      <h1>Inputs</h1>
      <div className="item">
        <form>
          <label>Label</label>
          <input
            type="text"
            placeholder="Placeholder"
            onChange={handleChange}
            value={value}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
