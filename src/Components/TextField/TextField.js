import * as React from "react";
import "./field.css";
import magnify from "../../Assets/images/magnify.gif";

export default function TextField({ searchChange }) {
  return (
    <div className="field-wrapper">
      <input
        className="input-field large"
        type="text"
        placeholder="Pesquisar..."
        onChange={searchChange}
      />
      <img className="field-icon" src={magnify} />
    </div>
  );
}
