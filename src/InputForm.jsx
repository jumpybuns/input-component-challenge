import React, { useState } from "react";
import titles from "./Titles";

export const InputForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const displayTitles = titles.map((title, index) => (
    <div key={title + index}>
      <h1>{title.focus}</h1>
    </div>
  ));

  const item = (
    <div className="item">
      {displayTitles}
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
  );

  return (
    <div>
      <h1>Inputs</h1>
      {item}
    </div>
  );
};
