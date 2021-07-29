import React, { useState } from "react";

export const InputForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>Inputs</h1>
      <div className="item">
        <h3 className="title">Input Name and Stuff</h3>
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
